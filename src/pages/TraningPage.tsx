// src/pages/Traning.tsx
import React, { useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, UploadCloud, Play } from "lucide-react"

export default function Traning() {
  const navigate = useNavigate()
  const location = useLocation()
  // If you navigated here with state (e.g. navigate("/train", { state: { botName } }))
  const passed = (location.state || {}) as Record<string, any>

  const [files, setFiles] = useState<File[]>([])
  const [training, setTraining] = useState(false)
  const [progress, setProgress] = useState(0) // 0..100
  const [logs, setLogs] = useState<string[]>([])
  const fileRef = useRef<HTMLInputElement | null>(null)

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files
    if (!selected) return
    setFiles((prev) => [...prev, ...Array.from(selected)])
    e.currentTarget.value = "" // reset so same file can be reselected
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  function addLog(text: string) {
    setLogs((prev) => [...prev, `${new Date().toLocaleTimeString()} — ${text}`])
  }

  function simulateTraining() {
    if (files.length === 0) {
      addLog("No training files selected. Aborting.")
      return
    }

    setTraining(true)
    setProgress(0)
    setLogs([])
    addLog(`Starting training for bot: ${passed.botName ?? "Unnamed Bot"}`)
    addLog(`Uploading ${files.length} file(s)...`)

    // simulate upload delay then training progress
    setTimeout(() => {
      addLog("Files uploaded. Preparing dataset...")
      let pct = 0
      const interval = setInterval(() => {
        pct += Math.floor(Math.random() * 8) + 4 // random speed
        if (pct >= 100) {
          pct = 100
          setProgress(100)
          addLog("Training completed successfully 🎉")
          clearInterval(interval)
          setTraining(false)
        } else {
          setProgress(pct)
          addLog(`Training in progress... ${pct}%`)
        }
      }, 800)
    }, 1000)
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Train Chatbot</h1>
          {passed.botName && <p className="text-sm text-muted-foreground">Bot: {passed.botName}</p>}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>

      {/* Main Card */}
      <Card className="bg-[#181818] text-white border border-[#2a2a2a]">
        <CardHeader className="px-6 py-4">
          <div className="flex items-center gap-3">
            <UploadCloud className="w-5 h-5 text-[#4f46e5]" />
            <h3 className="text-lg font-semibold">Training Dataset</h3>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-6 pt-2 space-y-6">
          {/* File upload + controls */}
          <div className="flex flex-col gap-3">
            <Label className="text-gray-300">Upload training files (JSON/CSV/TXT)</Label>

            <div className="flex gap-4 items-start">
              <div className="flex flex-col">
                <input
                  ref={fileRef}
                  type="file"
                  multiple
                  onChange={onFileChange}
                  className="hidden"
                  id="file-input"
                />
                <Button
                  onClick={() => fileRef.current?.click()}
                  className="flex items-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white"
                >
                  <UploadCloud className="w-4 h-4" /> Choose files
                </Button>
                <span className="text-sm text-gray-400 mt-2">Supported: .json .csv .txt</span>
              </div>

              {/* Input for additional parameter (example) */}
              <div className="flex-1">
                <Label className="text-gray-300">Training split (0.0 - 1.0)</Label>
                <Input placeholder="0.8" className="bg-[#202020] border border-[#2a2a2a] text-white w-full" />
              </div>
            </div>

            {/* files list */}
            <div>
              <div className="text-sm text-gray-400 mb-2">Selected Files</div>
              <div className="flex flex-col gap-2">
                {files.length === 0 && <div className="text-sm text-gray-500">No files selected</div>}
                {files.map((f, i) => (
                  <div key={`${f.name}-${i}`} className="flex items-center justify-between bg-[#202020] p-3 rounded">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium">{f.name}</div>
                      <div className="text-xs text-gray-400">{(f.size / 1024).toFixed(1)} KB</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(i)}
                        className="text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Training controls */}
          <div className="flex items-center gap-4">
            <Button
              onClick={simulateTraining}
              disabled={training}
              className="flex items-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white"
            >
              <Play className="w-4 h-4" /> Start Training
            </Button>

            <div className="flex-1">
              {/* simple progress bar */}
              <div className="w-full h-3 bg-[#262626] rounded overflow-hidden">
                <div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] transition-all"
                />
              </div>
              <div className="text-xs text-gray-400 mt-1">{progress}%</div>
            </div>
          </div>

          {/* logs */}
          <div>
            <Label className="text-gray-300">Logs</Label>
            <div className="h-40 overflow-auto bg-[#0f0f0f] rounded p-3 text-sm">
              {logs.length === 0 && <div className="text-gray-500">No logs yet</div>}
              {logs.map((l, i) => (
                <div key={i} className="text-gray-200 mb-1">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
