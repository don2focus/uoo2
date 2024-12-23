"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { Button } from "./button";

export function ToggleMode() {
  const { setTheme } = useTheme();
  const currentTheme = useTheme()["theme"];

  const handleClick = () => {
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      size="icon"
      className="btn__mode_nav focus:outline-none focus-visible:ring-0 "
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Themes</span>
    </Button>
  );
}
