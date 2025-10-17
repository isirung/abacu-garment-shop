import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Package } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "กำลังการผลิต/เดือน",
      value: "30,000+ ชิ้น",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "ระยะเวลาผลิต",
      value: "30-45 วัน",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "MOQ เริ่มต้น",
      value: "300 ชิ้น/แบบ",
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          <Button size="lg" variant="default">
            ขอใบเสนอราคา
          </Button>
          <Button size="lg" variant="outline">
            ดูบริการ
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4 text-primary">
                {stat.icon}
              </div>
              <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
