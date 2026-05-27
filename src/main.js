import Swiper from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import {animate, easeInOut, easeOut, inView, stagger, scroll} from 'motion';

document.addEventListener("DOMContentLoaded", () => {

    // Header logo animation
    const headerLogo = document.querySelector(".header-logo");

    if (headerLogo) {
        animate(
            headerLogo,
            {
                opacity: [0, 1],
                y: [-12, 0],
                scale: [0.96, 1],
                filter: ["blur(6px)", "blur(0px)"],
            },
            {
                duration: 0.9,
                delay: 0.15,
                easing: [0.16, 1, 0.3, 1],
            }
        );
    }

    // Hero intro sequence + parallax
    const heroWrapper = document.querySelector(".hero__wrapper");

    if (heroWrapper) {
        const heroText = heroWrapper.querySelector(":scope > div");
        const heroImage = heroWrapper.querySelector(
            ":scope > picture:not(.hero__bg, .hero__elements)"
        );
        const heroElements = heroWrapper.querySelector(".hero__elements");
        const heroBg = heroWrapper.querySelector(".hero__bg");
        const heroBgImage = heroWrapper.querySelector(".hero__bg img");

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            // 1. Background fade/blur first
            if (heroBg) {
                animate(
                    heroBg,
                    {
                        opacity: [0, 1],
                        filter: ["blur(18px)", "blur(0px)"],
                    },
                    {
                        duration: 0.9,
                        delay: 0.1,
                        easing: [0.16, 1, 0.3, 1],
                    }
                );
            }

            // Parallax background
            if (heroBgImage) {
                scroll(
                    animate(
                        heroBgImage,
                        {
                            y: ["-12%", "12%"],
                            scale: [1.08, 1.08],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: heroWrapper,
                        offset: ["start end", "end start"],
                    }
                );
            }

            // 2. Text
            if (heroText) {
                animate(
                    heroText,
                    {
                        opacity: [0, 1],
                        y: [28, 0],
                        filter: ["blur(12px)", "blur(0px)"],
                    },
                    {
                        duration: 0.75,
                        delay: 0.32,
                        easing: [0.16, 1, 0.3, 1],
                    }
                );
            }

            // 3. Main photo
            if (heroImage) {
                animate(
                    heroImage,
                    {
                        opacity: [0, 1],
                        y: [34, 0],
                        scale: [0.96, 1],
                        filter: ["blur(14px)", "blur(0px)"],
                    },
                    {
                        duration: 0.85,
                        delay: 0.52,
                        easing: [0.16, 1, 0.3, 1],
                    }
                );
            }

            // 4. Foreground elements
            if (heroElements) {
                animate(
                    heroElements,
                    {
                        opacity: [0, 1],
                        y: [36, 0],
                        scale: [0.94, 1],
                        rotate: [-1.5, 0],
                        filter: ["blur(14px)", "blur(0px)"],
                    },
                    {
                        duration: 1.05,
                        delay: 0.76,
                        easing: [0.16, 1, 0.3, 1],
                    }
                );
            }
        } else {
            if (heroBg) heroBg.style.opacity = "1";
            if (heroText) heroText.style.opacity = "1";
            if (heroImage) heroImage.style.opacity = "1";
            if (heroElements) heroElements.style.opacity = "1";
        }
    }

    const songsSwiperElement = document.querySelector(".songs-swiper");

    if (songsSwiperElement) {
        const songsSwiper = new Swiper(".songs-swiper", {
            modules: [Autoplay, FreeMode],

            slidesPerView: "auto",
            loop: true,
            spaceBetween: 9,
            speed: 9000,

            grabCursor: true,
            allowTouchMove: true,

            freeMode: {
                enabled: true,
                momentum: false,
            },

            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },

            on: {
                init(swiper) {
                    swiper.wrapperEl.style.transitionTimingFunction = "linear";
                },

                setTransition(swiper) {
                    swiper.wrapperEl.style.transitionTimingFunction = "linear";
                },
            },
        });

        let pausedTranslate = 0;

        const getTranslateX = () => {
            const transform = window.getComputedStyle(songsSwiper.wrapperEl).transform;

            if (!transform || transform === "none") {
                return 0;
            }

            return new DOMMatrixReadOnly(transform).m41;
        };

        const pauseSwiper = () => {
            pausedTranslate = getTranslateX();

            songsSwiper.autoplay.stop();
            songsSwiper.setTransition(0);
            songsSwiper.setTranslate(pausedTranslate);
        };

        const resumeSwiper = () => {
            songsSwiper.setTranslate(pausedTranslate);
            songsSwiper.setTransition(songsSwiper.params.speed);

            requestAnimationFrame(() => {
                songsSwiper.slideNext(songsSwiper.params.speed, true);
                songsSwiper.autoplay.start();
            });
        };

        songsSwiperElement.addEventListener("pointerenter", pauseSwiper);
        songsSwiperElement.addEventListener("pointerleave", resumeSwiper);
    }
});