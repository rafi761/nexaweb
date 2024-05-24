"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/NavbarMenu";
import { cn } from "@/utils/cn";

// export function NavbarDemo() {
//     return (
//         <div className="relative w-full flex items-center justify-center">
//             <Navbar className="top-2" />
//             <p className="text-black dark:text-white">
//                 The Navbar will show on top of the page
//             </p>
//         </div>
//     );
// }

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About Us">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Portfolio">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Pricing">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Testimonilas">

                </MenuItem>
            </Menu>
        </div>
    );
}
