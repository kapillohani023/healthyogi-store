import Image from "next/image";
import HealthyogiTypography  from "./ui/HealthyogiTypography";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-forest-green text-white">
            <div className="container mx-auto px-2 py-8">
                <div className="grid grid-cols-4 gap-8 px-2">
                    <div className="col-span-1 flex flex-col gap-4 justify-between">
                        <div className="flex flex-col gap-4">
                            <div className="overflow-hidden rounded-lg w-fit">
                                <Image src="/healthyogi-primary-logo.jpg" alt="Healthyogi" width={60} height={60} />
                            </div>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Premium quality makhana snacks that bring together health and taste in perfect harmony.</HealthyogiTypography>
                        </div>

                        <div className="flex gap-4">
                            <Facebook className="w-6 h-6" />
                            <Instagram className="w-6 h-6" />
                            <Youtube className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        <HealthyogiTypography variant="h1" classNameOverride="text-semibold text-2xl">Quick Links</HealthyogiTypography>
                        <div className="flex flex-col gap-2 mt-4">
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Home</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Products</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">About Us</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Health Benifits</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Recipes</HealthyogiTypography>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        <HealthyogiTypography variant="h1" classNameOverride="text-semibold text-2xl">Customer Service</HealthyogiTypography>
                        <div className="flex flex-col gap-2 mt-4">
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">My Account</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Order Tracking</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Shipping Info</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">Returns</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl">FAQ</HealthyogiTypography>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        <HealthyogiTypography variant="h1" classNameOverride="text-semibold text-2xl">Contact Us</HealthyogiTypography>
                        <div className="flex flex-col gap-4 mt-4">
                            <HealthyogiTypography variant="p" classNameOverride="text-xl flex items-center gap-2"><Phone className="w-6 h-6" /> +91 9876543210</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl flex items-center gap-2"><Mail className="w-6 h-6" /> info@healthyogi.com</HealthyogiTypography>
                            <HealthyogiTypography variant="p" classNameOverride="text-xl flex items-center gap-2"><MapPin className="w-6 h-6" /> 123, Wellness City, India</HealthyogiTypography>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-12 pt-8 container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        <HealthyogiTypography variant="p" classNameOverride="text-base">
                            © 2024 Healthyogi Makhana. All rights reserved.
                        </HealthyogiTypography>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}