import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar"
import { BotMessageSquare, House, PlusCircle, Rocket } from "lucide-react"
import { NavLink } from "react-router-dom"


export default function AppSidebar() {

    const menuItems = [
        { name: "DashBoard", icon: House, path: "/" },
        { name: "Create New ChatBot", icon: PlusCircle, path: "/create"},
        { name: "Train Chat Bot", icon: Rocket, path: "/train"},
    ]



    return (
        <>
            <Sidebar className="bg-[#181818]">
                <SidebarHeader className=" h-16 flex-row justify-evenly  mt-5">
                    <div className="text-2xl font-semibold items-center">
                        Support Chatbot
                    </div>
                    <div className="flex items-center bg-[#4f46e5] justify-center w-9 h-9 rounded-lg cursor-pointer transition-colors">
                        <BotMessageSquare className="w-6 h-6 text-white text-muted-foreground cursor-pointer hover:text-foreground transition" />
                    </div>

                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {menuItems.map(({ name, icon: Icon, path, }) => (
                            <SidebarMenuItem key={path}>
                                <SidebarMenuButton asChild className="flex items-center justify-start gap-3 px-5 py-7 w-full rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                                    <NavLink
                                        to={path}
                                        end={path === "/"}
                                        className={({ isActive }) =>
                                            [
                                                "flex items-center gap-3 w-full transition-colors",
                                                isActive
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                            ].join(" ")
                                        }
                                    >
                                        {Icon && <Icon className="!w-7 !h-7 text-muted-foreground" />}
                                        <span className="text-xl">{name}</span>

                                    </NavLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}

                    </SidebarMenu>

                </SidebarContent>


            </Sidebar>

        </>
    )
}