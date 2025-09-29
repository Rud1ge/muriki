import {Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";
import {BookOpen, Cat, ContactRound, LaptopMinimal} from "lucide-react"

const MurikiLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export function Navigation() {
    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <MurikiLogo/>
                <p className="font-bold text-inherit">MURIKI</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" className="flex items-center gap-1" href="#">
                        О нас <BookOpen/>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link color="foreground" className="flex items-center gap-1" href="#">
                        Кто <span className="text-pink-300 flex items-center gap-1">она?<Cat/></span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className="flex items-center gap-1" href="#">
                        Кто <span
                        className="text-blue-300 flex items-center gap-1">он?<LaptopMinimal/></span>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" className="flex items-center gap-1" href="#">
                        Контакты <ContactRound/>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}