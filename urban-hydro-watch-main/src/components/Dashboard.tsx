import MetricCard from "./MetricCard";
import WaterChart from "./WaterChart";
import { Activity, Droplets, Gauge, TestTube, Waves, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-water-system.jpg";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden">
        <img 
          src={heroImage}
          alt="IoT Water Monitoring System"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-2">Real-Time Water Quality Monitoring</h1>
            <p className="text-lg opacity-90">Advanced IoT sensors ensuring water safety and quality</p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge className="bg-white/20 text-white border-white/30">Live Monitoring</Badge>
              <Badge className="bg-white/20 text-white border-white/30">5 Active Sensors</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Cloud Connected</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Current Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard
          title="pH Level"
          value="7.2"
          unit="pH"
          status="normal"
          icon={TestTube}
          trend="stable"
          description="Optimal range: 6.5-8.5"
        />
        <MetricCard
          title="Turbidity"
          value="2.1"
          unit="NTU"
          status="normal"
          icon={Waves}
          trend="down"
          description="WHO standard: <5 NTU"
        />
        <MetricCard
          title="Flow Rate"
          value="45.2"
          unit="L/min"
          status="normal"
          icon={Activity}
          trend="up"
          description="Normal operation"
        />
        <MetricCard
          title="Pressure"
          value="3.2"
          unit="bar"
          status="warning"
          icon={Gauge}
          trend="stable"
          description="Slightly elevated"
        />
        <MetricCard
          title="Tank Level"
          value="85"
          unit="%"
          status="normal"
          icon={Droplets}
          trend="down"
          description="Adequate supply"
        />
      </div>

      {/* Real-time Charts */}
      <WaterChart />

      {/* System Status */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              System Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Data Transmission</span>
              <Badge variant="outline" className="text-success border-success">98.5% Uptime</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Sensor Accuracy</span>
              <Badge variant="outline" className="text-success border-success">±2% Error</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Response Time</span>
              <Badge variant="outline" className="text-primary border-primary">Less than 30s</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Power Status</span>
              <Badge variant="outline" className="text-success border-success">Solar Active</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium">Pressure Spike Detected</p>
                <p className="text-xs text-muted-foreground">2 hours ago - Tank #3</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium">pH Level Normalized</p>
                <p className="text-xs text-muted-foreground">4 hours ago - All sensors</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium">Routine Calibration Complete</p>
                <p className="text-xs text-muted-foreground">1 day ago - System maintenance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">14,250</div>
              <div className="text-sm text-muted-foreground">Data Points Collected</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold">99.2%</div>
                <div className="text-xs text-muted-foreground">Quality Score</div>
              </div>
              <div>
                <div className="text-lg font-semibold">24/7</div>
                <div className="text-xs text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;