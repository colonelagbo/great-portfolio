import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";


const navItems = [
    {name: "Home", href:"#home" },
    {name: "About", href:"#about" },
    {name: "Skills", href:"#skills" },
    {name: "Projects", href:"#projects" },
    {name: "Contact", href:"#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // correct property
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll); // correct cleanup
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            {/* Your nav items can go here if needed */}
        </nav>
    );
};
