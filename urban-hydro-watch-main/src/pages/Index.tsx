import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import ProjectDocumentation from "@/components/ProjectDocumentation";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="dashboard">Live Dashboard</TabsTrigger>
            <TabsTrigger value="documentation">Project Documentation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="documentation">
            <ProjectDocumentation />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
