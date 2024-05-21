"use client"

import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"
import { TextInput } from "@repo/ui/textinput"
import { useState } from "react"
import p2pTransfer from "../app/lib/actions/p2pTransfer"

export function SendMoneyCard(){
    const [amount, setAmount] = useState(0);
    const [number, setNumber] = useState("");
    return (
        <div className="h-[90vh]">
                <Card title="Send Money">
                    <div className="min-w-72 pt-2">
                        <TextInput placeholder="Phone Number" label="Phone No." onChange={(value) => {
                            setNumber(value);
                        }}/>
                        <TextInput placeholder="₹ XXX" label="Amount" onChange={(value) => {
                            setAmount(Number(value));
                        }}/>
                        <div className="pt-4 flex justify-center">
                            <Button onClick={async() => {
                                await p2pTransfer(number, amount * 100);
                            }}>
                                Send Money
                            </Button>
                        </div>
                    </div>
                </Card>
        </div>
    )
}