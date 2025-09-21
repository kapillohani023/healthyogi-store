import HealthyogiButton from "./ui/HealthyogiButton";
import Image from "next/image";
import Typography from "./ui/HealthyogiTypography";

export default function Body() {
    return (
        <div className="bg-sage-green w-full h-full grid grid-cols-2 gap-8 p-4 items-center">
            <div className="flex flex-col gap-4 col-span-1">
                <Typography classNameOverride="text-forest-green text-7xl font-bold">HEALTHY CAN BE TASTY</Typography>
                <Typography classNameOverride="text-forest-green text-lg">Discover our premium collection of roasted makhana - the perfect healthy snack that doesn&apos;t compromise on taste. Rich in protein, low in calories, and full of flavor.</Typography>
                <div className="flex gap-2">
                    <HealthyogiButton variant="primary">Shop Now</HealthyogiButton>
                    <HealthyogiButton variant="secondary">Learn More</HealthyogiButton>
                </div>
            </div>
            <div className="col-span-1 flex justify-end">
                <div className="overflow-hidden rounded-lg">
                    <Image src="/healthyogi-makhana-jar.jpg" alt="Healthyogi Makhana Jar" width={300} height={500} />
                </div>
            </div>

        </div>
    );
}