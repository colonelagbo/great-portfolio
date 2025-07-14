import { ArrowUp } from "lucide-react";
export const Footer = () => {
return (
    <footer className="py-6 px-60 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justifybetween items-center"> 
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Agbo's Porfolio, All rights reserved.</p>
<a href="#hero"
className="p-20 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
> 
    <ArrowUp size={20} />
</a>
    </footer>
);

};
export default Footer;