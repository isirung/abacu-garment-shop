const PortfolioSection = () => {
  // Sample portfolio items - in production these would be real images
  const portfolioItems = [
    { id: 1, alt: "Work sample 1" },
    { id: 2, alt: "Work sample 2" },
    { id: 3, alt: "Work sample 3" },
    { id: 4, alt: "Work sample 4" },
    { id: 5, alt: "Work sample 5" },
    { id: 6, alt: "Work sample 6" },
    { id: 7, alt: "Work sample 7" },
    { id: 8, alt: "Work sample 8" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2">ตัวอย่างผลงาน</h2>
          <p className="text-sm text-muted-foreground">
            *ภาพเป็นตัวอย่างประกอบ สามารถเปลี่ยนเป็นภาพงานจริงได้
          </p>
        </div>

        <div className="mb-8 text-center">
          <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-5xl mx-auto">
            บริษัท อะบาคัสการเม้นท์ (2000) จำกัด สามารถผลิตสินค้าได้หลากหลายประเภท
            <br />
            อาทิเช่น เสื้อโปโล เสื้อฮอคคอม เสื้อแจ็คเก็ต เสื้อชูดดิด หน้ากากอนามัย
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Work sample</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
