import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartData {
  time: string;
  ph: number;
  turbidity: number;
  flow: number;
  pressure: number;
  level: number;
}

const WaterChart = () => {
  // Simulated real-time data
  const data: ChartData[] = [
    { time: "00:00", ph: 7.2, turbidity: 2.1, flow: 45.2, pressure: 3.2, level: 85 },
    { time: "04:00", ph: 7.1, turbidity: 2.3, flow: 42.8, pressure: 3.1, level: 82 },
    { time: "08:00", ph: 7.3, turbidity: 2.0, flow: 48.5, pressure: 3.4, level: 88 },
    { time: "12:00", ph: 7.0, turbidity: 2.5, flow: 44.1, pressure: 3.0, level: 79 },
    { time: "16:00", ph: 7.2, turbidity: 1.9, flow: 46.7, pressure: 3.3, level: 84 },
    { time: "20:00", ph: 7.1, turbidity: 2.2, flow: 43.9, pressure: 3.1, level: 81 },
    { time: "24:00", ph: 7.2, turbidity: 2.0, flow: 45.8, pressure: 3.2, level: 86 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Water Quality Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="ph" 
                stroke="hsl(var(--chart-ph))" 
                strokeWidth={2}
                name="pH Level"
              />
              <Line 
                type="monotone" 
                dataKey="turbidity" 
                stroke="hsl(var(--chart-turbidity))" 
                strokeWidth={2}
                name="Turbidity (NTU)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Flow & Pressure Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="flow" 
                stroke="hsl(var(--chart-flow))" 
                strokeWidth={2}
                name="Flow Rate (L/min)"
              />
              <Line 
                type="monotone" 
                dataKey="pressure" 
                stroke="hsl(var(--chart-pressure))" 
                strokeWidth={2}
                name="Pressure (bar)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterChart;