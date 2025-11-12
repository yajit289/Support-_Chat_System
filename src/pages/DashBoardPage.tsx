import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import DashBoardCard from "@/components/DashboardCard"
import { useNavigate } from "react-router-dom"
export default function DashBoardPage() {
    const navigate= useNavigate()
    return (
        <>
            <div className="flex flex-col gap-10  ">
                {/* Header */}
                <div className="flex-col  justify-between items-center">
                    <h1 className="text-2xl font-bold">Dashboard</h1>

                    <div className=" flex justify-around relative w-full mt-6">
                        {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-4 text-muted-foreground" /> */}
                        <Input
                            
                            type="text"
                            placeholder="Search..."
                            className="pl-9 w-[600px]"
                        />

                        <Button onClick={()=> navigate("/create")} >
                            <Plus className="w-4 h-4 mr-2" /> Add New
                        

                        </Button>

                    </div>
                </div>
                <DashBoardCard  ></DashBoardCard>

            </div>
        </>
    )
}