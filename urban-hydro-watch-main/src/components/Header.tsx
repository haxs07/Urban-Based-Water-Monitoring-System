import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplets, Wifi, Signal } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Droplets className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">AquaMonitor IoT</h1>
              <p className="text-sm text-muted-foreground">Urban Water Monitoring System</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-success" />
            <Badge variant="outline" className="text-success border-success">Connected</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Signal className="h-4 w-4 text-primary" />
            <Badge variant="outline" className="text-primary border-primary">GSM Active</Badge>
          </div>
          <Button variant="outline">Export Data</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;