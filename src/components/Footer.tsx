import { SOCIAL_LINKS } from "@/lib/constants.ts";
import { Separator } from "@/components/ui/separator.tsx";

function Footer() {
    return (
        <footer className="p-4 pb-0">
            <div className="container mx-auto p-4 flex flex-col items-center gap-3 min-h-16 bg-background border border-b-0 rounded-t-xl lg:flex-row lg:justify-between">
                <p className="text-sm text-center">
                    &copy;Copyright All Rights Reserved{" "}
                    {new Date().getFullYear()}
                </p>
                <ul className="flex items-center flex-wrap">
                    {SOCIAL_LINKS.map(({ href, label }, index) => (
                        <li className="flex items-center" key={index}>
                            <a
                                className="text-sm text-muted-foreground hover:text-foreground"
                                href={href}
                                target="_blank"
                            >
                                {label}
                            </a>
                            {index !== SOCIAL_LINKS.length - 1 && (
                                <Separator
                                    className="h-3 mx-3"
                                    orientation="vertical"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
