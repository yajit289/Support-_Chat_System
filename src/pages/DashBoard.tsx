import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
export default function DashBoard() {
    return (
        <>
            <div className="flex flex-col gap-6 w- ">
                {/* Header */}
                <div className="flex-col  justify-between items-center">
                    <h1 className="text-2xl font-bold">Dashboard</h1>

                    <div className="relative w-64 mt-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="pl-9 w-[600px]"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}