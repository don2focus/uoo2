import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CircleUserRound, ClockArrowUp } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ToggleMode } from "./ui/toogle-mode";
import { NAV_COMPONENTS } from "@/lib/data";

const Navbar = () => {
  const components = NAV_COMPONENTS;
  return (
    <>
      <header className="nav__class sticky top-0 w-full backdrop-blur flex=-none lg:border-b z-50">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 lg:px-8">
            <div className="relative flex items-center">
              <Link className="mr-3 flex w-32 gap-2 overflow-hidden" href="/">
                <span className="sr-only">CD home page</span>
                <ClockArrowUp /> UOO
              </Link>
              <div className="relative"></div>
              <div className="relative ml-auto">
                <NavigationMenu
                  orientation="vertical"
                  className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200"
                >
                  <NavigationMenuList className="flex space-x-8">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {components.map((component) => (
                            <ListItemLink
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItemLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="hover:text-sky-500 dark:hover:text-sky-400">
                          Docs
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="flex items-center border-l ml-6 pl-6">
                <ToggleMode />
                <Link
                  href="/"
                  className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Signin | Signup</span>
                  <CircleUserRound />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

const ListItemLink = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link ref={ref} href={`${props.href}`} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-transparent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItemLink.displayName = "ListItem";
