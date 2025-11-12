import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Bot, MessageSquare, Users, TrendingUp } from "lucide-react"

export default function DashBoardCard() {

    const cardData = [
        {
            id: 1,
            title: "Active Chatbots",
            value: "8",
            icon: Bot,
            description: "Currently deployed on websites",
            color: "text-indigo-400"
        },
        {
            id: 2,
            title: "Messages Processed",
            value: "12,430",
            icon: MessageSquare,
            description: "Total interactions this month",
            color: "text-green-400"
        },
        {
            id: 3,
            title: "Users Engaged",
            value: "5,842",
            icon: Users,
            description: "Unique users across all bots",
            color: "text-pink-400"
        },
        {
            id: 4,
            title: "Performance",
            value: "98%",
            icon: TrendingUp,
            description: "Response accuracy and uptime",
            color: "text-yellow-400"
        },
    ]


    return (
        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardData.map(({ id, title, value, icon: Icon, description, color }) => (
                    <Card
                        key={id}
                        className="bg-[#181818] text-white border-none hover:scale-[1.02] transition-transform duration-300"
                    >
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium">{title}</CardTitle>
                            <Icon className={`w-5 h-5 ${color}`} />
                        </CardHeader>

                        <CardContent>
                            <div className="text-3xl font-bold">{value}</div>
                            <p className="text-sm text-gray-400 mt-1">{description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>



        </>
    )
}
