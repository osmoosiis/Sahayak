"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, BrainCircuit, FileText, Settings } from "lucide-react"

interface AIAgentPlaceholderProps {
  type: "alerts" | "predictions" | "reports" | "settings"
}

export function AIAgentPlaceholder({ type }: AIAgentPlaceholderProps) {
  // This is a placeholder component for the AI agent configuration
  // In a real application, this would connect to an AI service

  if (type === "alerts") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-amber-500" />
            <Label htmlFor="enable-alerts">Enable AI Stock Alerts</Label>
          </div>
          <Switch id="enable-alerts" defaultChecked />
        </div>

        <div className="space-y-2">
          <Label htmlFor="alert-threshold">Alert Threshold (days before expiry)</Label>
          <Slider defaultValue={[30]} max={90} step={1} />
          <div className="text-xs text-muted-foreground text-right">30 days</div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="alert-frequency">Alert Frequency</Label>
          <Select defaultValue="daily">
            <SelectTrigger>
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realtime">Real-time</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notification-method">Notification Method</Label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Switch id="notify-app" defaultChecked />
              <Label htmlFor="notify-app">In-app</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notify-email" defaultChecked />
              <Label htmlFor="notify-email">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notify-sms" />
              <Label htmlFor="notify-sms">SMS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notify-whatsapp" />
              <Label htmlFor="notify-whatsapp">WhatsApp</Label>
            </div>
          </div>
        </div>

        <Button className="w-full">Save Alert Configuration</Button>
        <p className="text-xs text-muted-foreground text-center">
          Connect your AI service API to enable intelligent stock alerts
        </p>
      </div>
    )
  }

  if (type === "predictions") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BrainCircuit className="h-5 w-5 text-blue-500" />
            <Label htmlFor="enable-predictions">Enable Usage Predictions</Label>
          </div>
          <Switch id="enable-predictions" defaultChecked />
        </div>

        <div className="space-y-2">
          <Label htmlFor="prediction-model">Prediction Model</Label>
          <Select defaultValue="advanced">
            <SelectTrigger>
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic (Linear Regression)</SelectItem>
              <SelectItem value="advanced">Advanced (Machine Learning)</SelectItem>
              <SelectItem value="custom">Custom Model</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="prediction-horizon">Prediction Horizon</Label>
          <Select defaultValue="30">
            <SelectTrigger>
              <SelectValue placeholder="Select horizon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 days</SelectItem>
              <SelectItem value="14">14 days</SelectItem>
              <SelectItem value="30">30 days</SelectItem>
              <SelectItem value="90">90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="api-key">AI Service API Key</Label>
          <Input id="api-key" type="password" placeholder="Enter your API key" />
          <p className="text-xs text-muted-foreground">Connect to your preferred AI service for predictions</p>
        </div>

        <Button className="w-full">Save Prediction Configuration</Button>
      </div>
    )
  }

  if (type === "reports") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-green-500" />
            <Label htmlFor="enable-reports">Enable Automated Reports</Label>
          </div>
          <Switch id="enable-reports" defaultChecked />
        </div>

        <div className="space-y-2">
          <Label htmlFor="report-frequency">Report Generation Frequency</Label>
          <Select defaultValue="weekly">
            <SelectTrigger>
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="quarterly">Quarterly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Report Types</Label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Switch id="report-stock" defaultChecked />
              <Label htmlFor="report-stock">Stock Usage</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="report-vaccinations" defaultChecked />
              <Label htmlFor="report-vaccinations">Vaccinations</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="report-expiry" defaultChecked />
              <Label htmlFor="report-expiry">Expiry Analysis</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="report-predictions" defaultChecked />
              <Label htmlFor="report-predictions">Predictions</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="report-recipients">Report Recipients</Label>
          <Textarea
            id="report-recipients"
            placeholder="Enter email addresses (one per line)"
            defaultValue="healthworker@example.com
supervisor@example.com"
          />
        </div>

        <Button className="w-full">Save Report Configuration</Button>
      </div>
    )
  }

  if (type === "settings") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-slate-500" />
            <Label htmlFor="enable-ai">Enable AI Agent</Label>
          </div>
          <Switch id="enable-ai" defaultChecked />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ai-model">AI Model</Label>
          <Select defaultValue="gpt4">
            <SelectTrigger>
              <SelectValue placeholder="Select AI model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt4">GPT-4</SelectItem>
              <SelectItem value="gpt35">GPT-3.5</SelectItem>
              <SelectItem value="claude">Claude</SelectItem>
              <SelectItem value="custom">Custom Model</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="api-endpoint">API Endpoint</Label>
          <Input id="api-endpoint" placeholder="https://api.example.com/v1" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <Input id="api-key" type="password" placeholder="Enter your API key" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="data-privacy">Data Privacy</Label>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center space-x-2">
              <Switch id="anonymize-data" defaultChecked />
              <Label htmlFor="anonymize-data">Anonymize Patient Data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="local-processing" defaultChecked />
              <Label htmlFor="local-processing">Process Data Locally When Possible</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="data-retention" />
              <Label htmlFor="data-retention">Limit Data Retention (30 days)</Label>
            </div>
          </div>
        </div>

        <Button className="w-full">Save AI Agent Settings</Button>
      </div>
    )
  }

  return null
}

