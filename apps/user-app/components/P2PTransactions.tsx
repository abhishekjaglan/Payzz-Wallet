import { Card } from "@repo/ui/card"

export default function getP2PTransactions({
    transactions
}: {
    transactions:{
        time: Date,
        to: string,
        amount: number
    }[]
}){
    if(!transactions.length){
        return (
            <Card title="Recent P2P Transfers">
                <div className="text-center pb-8 pt-8">
                    No Recent transactions
                </div>
            </Card>
        )
    }

    return (
        <Card title="Recent P2P Transfers">
            <div className="pt-2">
                {transactions.map(t => <div className="flex justify-between">
                    <div>
                        <div className="text-sm">
                            ₹ Received / Sent
                        </div>
                        <div className="text-slate-600 text-xs">
                            {t.time.toDateString()}
                        </div>
                    </div>
                    <div className="flow-root">
                        <div className="float-left">
                            {t.to}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        + ₹ {t.amount / 100}
                    </div>
                </div>
                )}
            </div>
        </Card>
    )
}