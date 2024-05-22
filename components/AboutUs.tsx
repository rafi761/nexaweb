import { HoverEffect } from "./ui/CardHoverEffect";

export function AboutUs() {
    return (
        <div className="max-w-5xl mx-auto px-8 flex flex-col">
            <h1 className="text-center text-[40px] md:text-3xl lg:text-5xl relative z-20 my-4 bg-gradient-to-r from-[#fff] to-[#00607A] bg-clip-text text-transparent">Why Choose Us ?</h1>
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Get free consultation",
        description:
            "We are very flexible with all your questions and requirements. We are happy to help you, just feel free to contact us.",
        link: "/",
    },
    {
        title: "Get a Revisions",
        description:
            "Receive comprehensive revisions both during and after the completion of the project.",
        link: "/",
    },
    {
        title: "SEO Optimization",
        description:
            "Make your website easier to find on Google so it attracts more visitors",
        link: "/",
    },
    {
        title: "Responsive Design",
        description:
            "Get a website that can adapt to any screen size from various devices.",
        link: "/",
    },
    {
        title: "Best Security System",
        description:
            "Using best security systems to protect your valuable data and prevent cyber threats.",
        link: "/",
    },
    {
        title: "24/7 Customer Support",
        description:
            "Our support team are available 24/7 to answer any of your questions.",
        link: "/",
    },
];
