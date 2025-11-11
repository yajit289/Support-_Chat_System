
// import AppSidebar from "./AppSidebar"
// import { SidebarProvider } from "./sidebar"

// export default function AppLayout() {
//     return (
//         <>
        
//         <SidebarProvider>
//             <AppSidebar></AppSidebar>
//         </SidebarProvider>
//         </>
//     )
// }


// src/components/ui/AppLayout.tsx (or wherever your AppLayout is)
import AppSidebar from "./AppSidebar"
import { SidebarProvider } from "./sidebar"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-dvh w-dvw overflow-hidden">
        <AppSidebar />
        <main className="flex-1 min-w-0 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
