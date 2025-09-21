import Image from "next/image";
import { User, ShoppingCart } from 'lucide-react';

export default function Header() {
    return (
        <div
            className="bg-forest-green px-4 py-8"
        >
            <div className="flex justify-center items-center">
                <div className="overflow-hidden rounded-lg">
                    <Image src="/healthyogi-primary-logo.jpg" alt="Healthyogi" width={80} height={80} />
                </div>
            </div>
            <div className="flex items-center gap-4 justify-end z-10 absolute right-4 top-16">
                <User />
                <ShoppingCart />
            </div>
        </div>

    );
}