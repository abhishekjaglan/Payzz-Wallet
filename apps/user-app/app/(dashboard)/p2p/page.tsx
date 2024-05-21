import { getServerSession } from "next-auth";
import { SendMoneyCard } from "../../../components/SendMoneyCard";
import prisma from "@repo/db/client"
import { authOptions } from "../../lib/auth";
import { BalanceCard } from "../../../components/BalanceCard";
import P2PTransactions from "../../../components/P2PTransactions"
import Toggle from "../../../components/Toggle";

async function getBalance(){
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findUnique({
        where:{
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0,
    };
}

async function getP2PTransactions(){
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
        where:{
            fromUserId: Number(session?.user?.id)
        },
        select:{
            toUser: true,
            timestamp: true,
            amount: true
        }
    });

    return transactions.map(t => ({
        time: t.timestamp,
        to: t.toUser.name || "",
        amount: t.amount
    }));
}

export default async function(){
    const balance = await getBalance();
    const transactions = await getP2PTransactions();

    return (
        <div className="w-screen">
            <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
                P2P Transfers
            </div>

            <div>
                <Toggle input={{left:"Send", right: "Receive"}}/>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
                <div>
                    <SendMoneyCard/>
                </div>
                <div>
                    <BalanceCard amount={balance.amount} locked={balance.locked} />
                    <div className="pt-4">
                        <P2PTransactions transactions={transactions}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}