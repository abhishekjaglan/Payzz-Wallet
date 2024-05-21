"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client"

export default async function p2pTransfer(to: string, amount: number){
    const session = await getServerSession(authOptions);

    if(!session?.user || !session?.user?.id){
        return {
            message: "Unauthenticated user"
        };
    }

    const toUser = await prisma.user.findFirst({
        where: {
            number: to
        }
    });

    if(!toUser){
        return {
            message: "User not found"
        };
    }

    await prisma.$transaction(async (ts) => {

        await ts.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(session?.user?.id)} FOR UPDATE`;

        const fromBalance = await ts.balance.findUnique({
            where: {
                userId: Number(session?.user?.id)
            }
        });

        console.log("Above sleep");
        await new Promise(r => setTimeout(r, 4000));
        console.log("Below sleep");

        if(!fromBalance || fromBalance?.amount < Number(amount)){
            throw new Error('Insufficient funds');
        }

        await ts.balance.update({
            where:{
                userId: Number(session?.user?.id)
            },
            data:{
                amount:{
                    decrement: Number(amount)
                }
            }
        })

        await ts.balance.update({
            where:{
                userId: toUser.id
            },
            data:{
                amount:{
                    increment: Number(amount)
                }
            }
        });

        await ts.p2pTransfer.create({
            data:{
                fromUserId: Number(session?.user?.id),
                toUserId: toUser.id,
                timestamp: new Date(),
                amount: amount
            }
        });
    });
}