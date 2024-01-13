"use client";
import React, { useEffect } from "react"; // Don't forget to import React
import { Button } from "@/components/ui/button"; // Import the Button component
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar"
import { Sheet,
     SheetTrigger,
     SheetContent
    } from "@/components/ui/sheet";
   import { useState } from "react";


const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }
   
  return (
    <Sheet>
        <SheetTrigger>
    <Button variant="ghost"  size="icon" className="md:hidden">
      <Menu />
    </Button>
    </SheetTrigger>
    <SheetContent side="left" className="p-0">
        <Sidebar />
        </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
