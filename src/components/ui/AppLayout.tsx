import AppSidebar from "./AppSidebar"
import { SidebarProvider } from "./sidebar"

export default function AppLayout() {
    return (
        <>
        <SidebarProvider>
            <AppSidebar></AppSidebar>
        </SidebarProvider>
        </>
    )
}