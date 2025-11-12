import { Card, CardHeader, CardContent } from "./ui/card"
import { Plus } from "lucide-react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
export default function ChatBotCard() {
  return (
    <>
      <Card className="w-200 h-96 bg-[#181818] text-white border border-[#2a2a2a] hover:bg-[#202020] transition">
        <CardHeader className="flex items-center  gap-3 text-2xl font-bold">
          <Plus className="w-7 h-6 " strokeWidth={3} />
          <span>Create New Chat Bot</span>
        </CardHeader>
        <CardContent className="space-y-5 grid grid-cols-2 space-x-10">

          {/* Input Field */}
          <div className="flex flex-col space-y-2">
            <Label className="text-gray-300">Chatbot Name</Label>
            <Input
              type="text"
              placeholder="Enter chatbot name"
              className="bg-[#202020] border border-[#2a2a2a] text-white placeholder:text-gray-400 w-full"
            />
          </div>

          {/* Dropdown 1 — Chatbot Type */}
          <div className="flex flex-col space-y-2">
            <Label className="text-gray-300">Chatbot Type</Label>
            <Select>
              <SelectTrigger className="bg-[#202020] border border-[#2a2a2a] text-white w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-[#202020] text-white border border-[#2a2a2a]">
                <SelectItem value="support">Customer Support</SelectItem>
                <SelectItem value="sales">Sales Assistant</SelectItem>
                <SelectItem value="faq">FAQ Bot</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Dropdown 2 — Language */}
          <div className="flex flex-col space-y-2">
            <Label className="text-gray-300">Language</Label>
            <Select>
              <SelectTrigger className="bg-[#202020] border border-[#2a2a2a] text-white w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-[#202020] text-white border border-[#2a2a2a]">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Dropdown 3 — Tone */}
          <div className="flex flex-col space-y-2">
            <Label className="text-gray-300">Tone</Label>
            <Select>
              <SelectTrigger className="bg-[#202020] border border-[#2a2a2a] text-white w-full">
                <SelectValue placeholder="Select tone" />
              </SelectTrigger>
              <SelectContent className="bg-[#202020] text-white border border-[#2a2a2a]">
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="friendly">Friendly</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </CardContent>
      </Card>




    </>
  )
}