import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Garment Manufacturing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-primary">ABC</span>
              <br />
              <span className="text-foreground">ABACUS GARMENT</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              บริษัท อะบาคัสการเม้นท์ (2000) จำกัด
            </p>
          </div>

          <p className="text-lg mb-8 text-foreground/90 max-w-xl">
            ผู้ผลิตเสื้อผ้า OEM/ODM มืออาชีพ ด้วยประสบการณ์กว่า 20 ปี 
            พร้อมมาตรฐาน ISO 9001 และใบรับรองคุณภาพระดับสากล
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              ขอใบเสนอราคา <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              ดูบริการ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
