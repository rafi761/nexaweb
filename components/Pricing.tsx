"use client";
import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function Pricing() {
    return (
        <div className="mb-20 mt-40">
            <div className="mb-8">
                <TextGenerateEffect words="Choose Your Perfect Plan" className="text-center text-[40px] md:text-3xl lg:text-5xl relative z-20 my-4 bg-gradient-to-r from-[#fff] to-[#00607A] bg-clip-text text-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900/60">
                    {/* <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                /> */}
                    <div className="flex justify-between">
                        <p className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200">
                            BASIC
                        </p>
                        <p className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200">
                            $15/<span className="text-sm">month</span>
                        </p>
                    </div>

                    <button className="w-full relative inline-flex my-4 h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="w-full absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Order Now
                        </span>
                    </button>

                    <div className="grid grid-cols-1 gap-3">
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>FREE Consultation</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>FREE Domain and Hosting</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>SEO Optimization</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>Responsive Design</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>Max Delivery: 3 Days</span>
                        </p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900/60">
                    {/* <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                /> */}
                    <div className="flex justify-between">
                        <p className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200">
                            STANDART
                        </p>
                        <p className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200">
                            $30/<span className="text-sm">month</span>
                        </p>
                    </div>

                    <button className="w-full relative inline-flex my-4 h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="w-full absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Order Now
                        </span>
                    </button>

                    <div className="grid grid-cols-1 gap-3">
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>FREE Consultation</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>FREE Domain and Hosting</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>SEO Optimization</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>Responsive Design</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>Max Delivery: 5 Days</span>
                        </p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900/60">
                    {/* <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                /> */}
                    <div className="flex justify-between">
                        <p className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200">
                            PREMIUM
                        </p>
                        <p className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200">
                            $75/<span className="text-sm">month</span>
                        </p>
                    </div>

                    <button className="w-full relative inline-flex my-4 h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="w-full absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-backgroundSecondary px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            Order Now
                        </span>
                    </button>

                    <div className="grid grid-cols-1 gap-3">
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>FREE Consultation</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>FREE Domain and Hosting</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>SEO Optimization</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>Responsive Design</span>
                        </p>
                        <p className="text-base text-neutral-600 dark:text-neutral-200 flex items-center gap-3">
                            <FiCheckCircle size={40} /> <span>Max Delivery: 7 Days</span>
                        </p>
                    </div>
                </BackgroundGradient>
            </div>
        </div>
    );
}
