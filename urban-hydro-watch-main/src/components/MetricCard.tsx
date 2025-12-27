import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  status: "normal" | "warning" | "critical";
  icon: LucideIcon;
  trend?: "up" | "down" | "stable";
  description?: string;
}

const MetricCard = ({ title, value, unit, status, icon: Icon, trend, description }: MetricCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "normal": return "success";
      case "warning": return "warning";
      case "critical": return "destructive";
      default: return "secondary";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up": return "↗";
      case "down": return "↘";
      case "stable": return "→";
      default: return "";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <div className="text-2xl font-bold text-foreground">{value}</div>
              <div className="text-sm text-muted-foreground">{unit}</div>
            </div>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge variant={getStatusColor() as any} className="text-xs">
              {status.toUpperCase()}
            </Badge>
            {trend && (
              <span className="text-xs text-muted-foreground">{getTrendIcon()}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;