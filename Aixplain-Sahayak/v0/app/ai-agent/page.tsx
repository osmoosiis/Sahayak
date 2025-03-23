import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AIAgentPlaceholder } from "@/components/ai/ai-agent-placeholder"

export default function AIAgentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">AI Agent Configuration</h2>
        </div>
        <Tabs defaultValue="alerts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="alerts">Stock Alerts</TabsTrigger>
            <TabsTrigger value="predictions">Usage Predictions</TabsTrigger>
            <TabsTrigger value="reports">Automated Reports</TabsTrigger>
            <TabsTrigger value="settings">Agent Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Stock Alert Configuration</CardTitle>
                <CardDescription>Configure AI-powered alerts for low stock and expiring items</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAgentPlaceholder type="alerts" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="predictions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Usage Predictions</CardTitle>
                <CardDescription>Configure AI to predict future stock needs based on usage patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAgentPlaceholder type="predictions" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Automated Reports</CardTitle>
                <CardDescription>Configure AI to generate automated reports on schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAgentPlaceholder type="reports" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Agent Settings</CardTitle>
                <CardDescription>Configure general AI agent settings</CardDescription>
              </CardHeader>
              <CardContent>
                <AIAgentPlaceholder type="settings" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

