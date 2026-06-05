import Swiper from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { animate, easeOut, scroll, inView } from "motion";

document.addEventListener("DOMContentLoaded", () => {
    /**
     * Header logo animation
     */
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

    /**
     * Hero intro sequence + parallax
     */
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

            const getHeroAnimationValues = () => {
                const isMobile = window.matchMedia("(max-width: 768px)").matches;

                return {
                    opacity: [0, 1],
                    y: isMobile ? [48, 0] : [36, 0],
                    scale: isMobile ? [0.94, 1.5] : [0.94, 1],
                    rotate: isMobile ? [-2.5, 0] : [-1.5, 0],
                    filter: ["blur(14px)", "blur(0px)"],
                };
            };

            const heroMobileQuery = window.matchMedia("(max-width: 768px)");

            const getHeroFinalValues = () => {
                const isMobile = heroMobileQuery.matches;

                return {
                    opacity: 1,
                    y: 0,
                    scale: isMobile ? 1.5 : 1,
                    rotate: 0,
                    filter: "blur(0px)",
                };
            };

            if (heroElements) {
                let heroElementsAnimation = animate(heroElements, getHeroAnimationValues(), {
                    duration: 1.05,
                    delay: 0.76,
                    easing: [0.16, 1, 0.3, 1],
                });

                const updateHeroElementsOnResize = () => {
                    if (heroElementsAnimation) {
                        heroElementsAnimation.cancel();
                    }

                    heroElementsAnimation = animate(heroElements, getHeroFinalValues(), {
                        duration: 0.35,
                        easing: [0.16, 1, 0.3, 1],
                    });
                };

                if (heroMobileQuery.addEventListener) {
                    heroMobileQuery.addEventListener("change", updateHeroElementsOnResize);
                } else {
                    heroMobileQuery.addListener(updateHeroElementsOnResize);
                }
            }
        } else {
            if (heroBg) heroBg.style.opacity = "1";
            if (heroText) heroText.style.opacity = "1";
            if (heroImage) heroImage.style.opacity = "1";
            if (heroElements) heroElements.style.opacity = "1";
        }
    }

    /**
     * Songs section animation
     */
    const songsSection = document.querySelector(".songs");

    if (songsSection) {
        const songsHeading = songsSection.querySelector(".songs__heading");
        const songsSwiper = songsSection.querySelector(".songs-swiper");
        const songCards = songsSection.querySelectorAll(".song-card");

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            inView(
                songsSection,
                () => {
                    if (songsHeading) {
                        animate(
                            songsHeading,
                            {
                                opacity: [0, 1],
                                y: [28, 0],
                                filter: ["blur(10px)", "blur(0px)"],
                            },
                            {
                                duration: 0.7,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (songsSwiper) {
                        animate(
                            songsSwiper,
                            {
                                opacity: [0, 1],
                                y: [36, 0],
                                scale: [0.98, 1],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.8,
                                delay: 0.18,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (songCards.length) {
                        animate(
                            songCards,
                            {
                                opacity: [0, 1],
                                y: [34, 0],
                                scale: [0.96, 1],
                                filter: ["blur(10px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                delay: 0.25,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }
                },
                {
                    margin: "0px 0px -20% 0px",
                }
            );
        } else {
            if (songsHeading) songsHeading.style.opacity = "1";
            if (songsSwiper) songsSwiper.style.opacity = "1";
            songCards.forEach((card) => {
                card.style.opacity = "1";
            });
        }
    }

    /**
     * Form section animation
     */
    const formSection = document.querySelector(".form");

    if (formSection) {
        const formText = formSection.querySelector(".form__wrapper > div:first-child");
        const formImageArea = formSection.querySelector(".form__image-area");
        const formImage = formSection.querySelector(".form__image-area img");

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            inView(
                formSection,
                () => {
                    if (formText) {
                        animate(
                            formText,
                            {
                                opacity: [0, 1],
                                x: [-36, 0],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (formImageArea) {
                        animate(
                            formImageArea,
                            {
                                opacity: [0, 1],
                                x: [36, 0],
                                scale: [0.96, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.85,
                                delay: 0.16,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }
                },
                {
                    margin: "0px 0px -20% 0px",
                }
            );

            if (formImage) {
                scroll(
                    animate(
                        formImage,
                        {
                            y: ["-4%", "4%"],
                            scale: [1.04, 1.04],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: formSection,
                        offset: ["start end", "end start"],
                    }
                );
            }
        } else {
            if (formText) formText.style.opacity = "1";
            if (formImageArea) formImageArea.style.opacity = "1";
        }
    }

    /**
     * Songs swiper
     */
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

    /**
     * Vote form validation
     */
    const form = document.getElementById("voteForm");

    if (form) {
        const email = document.getElementById("email");
        const formMessages = document.getElementById("formMessages");
        const formInputs = form.querySelector(".form-inputs");

        const isValidEmail = (value) => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        };

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (!email || !formMessages || !formInputs) return;

            formMessages.innerHTML = "";
            formMessages.className = "";
            email.classList.remove("input-error");

            const errors = [];
            const selectedRadio = form.querySelector('input[name="radioGroup"]:checked');

            if (!selectedRadio) {
                errors.push("Παρακαλώ επιλέξτε ένα τραγούδι.");
            }

            if (!email.value.trim()) {
                errors.push("Παρακαλώ συμπληρώστε το email σας.");
                email.classList.add("input-error");
            } else if (!isValidEmail(email.value.trim())) {
                errors.push("Παρακαλώ εισάγετε ένα έγκυρο email.");
                email.classList.add("input-error");
            }

            if (errors.length > 0) {
                formMessages.className = "form-error";
                formMessages.innerHTML = errors.join("<br>");
                return;
            }

            formMessages.className = "form-success";
            formMessages.textContent = "Η συμμετοχή σας καταχωρήθηκε επιτυχώς.";

            formInputs.style.display = "none";
        });
    }

    /**
     * Banner text animation
     */
    const bannerText = document.querySelector(".banner-text__wrapper");

    if (bannerText) {
        const bannerContent = bannerText.querySelector(":scope > div");
        const bannerBg = bannerText.querySelector(".banner-text__bg");
        const bannerBgImage = bannerText.querySelector(".banner-text__bg img");

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            inView(
                bannerText,
                () => {
                    if (bannerBg) {
                        animate(
                            bannerBg,
                            {
                                opacity: [0, 1],
                                filter: ["blur(18px)", "blur(0px)"],
                            },
                            {
                                duration: 0.8,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (bannerContent) {
                        animate(
                            bannerContent,
                            {
                                opacity: [0, 1],
                                y: [32, 0],
                                scale: [0.96, 1],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                delay: 0.18,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }
                },
                {
                    margin: "0px 0px -20% 0px",
                }
            );

            if (bannerContent) {
                scroll(
                    animate(
                        bannerContent,
                        {
                            y: ["8%", "-8%"],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: bannerText,
                        offset: ["start end", "end start"],
                    }
                );
            }

            if (bannerBgImage) {
                scroll(
                    animate(
                        bannerBgImage,
                        {
                            y: ["-25%", "25%"],
                            scale: [1, 1],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: bannerText,
                        offset: ["start end", "end start"],
                    }
                );
            }
        } else {
            if (bannerBg) bannerBg.style.opacity = "1";
            if (bannerContent) bannerContent.style.opacity = "1";
        }
    }

    /**
     * Screen 1 animation
     */
    const screen1 = document.querySelector(".screen--1");

    if (screen1) {
        const screen1Wrapper = screen1.querySelector(".screen__wrapper");
        const screen1Content = screen1.querySelector(".screen__wrapper > div");
        const screen1ElementsLeft = screen1.querySelector(".screen__elements-left");
        const screen1ElementsRight = screen1.querySelector(".screen__elements-right");
        const screen1Bg = screen1.querySelector(".screen__bg");
        const screen1BgImage = screen1.querySelector(".screen__bg img");

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            let screen1Animated = false;

            inView(
                screen1,
                () => {
                    if (screen1Animated) return;
                    screen1Animated = true;

                    if (screen1Bg) {
                        animate(
                            screen1Bg,
                            {
                                opacity: [0, 1],
                                scale: [1.04, 1],
                                filter: ["blur(18px)", "blur(0px)"],
                            },
                            {
                                duration: 0.9,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen1ElementsLeft) {
                        animate(
                            screen1ElementsLeft,
                            {
                                opacity: [0, 1],
                                x: [-90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.18,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen1ElementsRight) {
                        animate(
                            screen1ElementsRight,
                            {
                                opacity: [0, 1],
                                x: [90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.26,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen1Content) {
                        animate(
                            screen1Content,
                            {
                                opacity: [0, 1],
                                y: [28, 0],
                                scale: [0.96, 1],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                delay: 0.46,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }
                },
                {
                    margin: "0px 0px -20% 0px",
                }
            );

            if (screen1Wrapper && screen1BgImage) {
                scroll(
                    animate(
                        screen1BgImage,
                        {
                            y: ["-10%", "0%"],
                            scale: [1, 1],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: screen1Wrapper,
                        offset: ["start end", "end start"],
                    }
                );
            }
        } else {
            if (screen1Bg) screen1Bg.style.opacity = "1";
            if (screen1ElementsLeft) screen1ElementsLeft.style.opacity = "1";
            if (screen1ElementsRight) screen1ElementsRight.style.opacity = "1";
            if (screen1Content) screen1Content.style.opacity = "1";
        }
    }

    /**
     * Screen 2 animation
     */
    const screen2 = document.querySelector(".screen--2");

    if (screen2) {
        const screen2Wrapper = screen2.querySelector(".screen__wrapper");
        const screen2Heading = screen2.querySelector(".screen__wrapper > div:first-child");
        const screen2ElementsLeft = screen2.querySelector(".screen__elements-left");
        const screen2ElementsRight = screen2.querySelector(".screen__elements-right");
        const screen2Percent = screen2.querySelector(".screen__percent");
        const screen2Subtitle = screen2.querySelector(".screen__percent + div");
        const screen2BgKey = screen2.dataset.bg;
        const screen2Bg = screen2.querySelector(`.screen__bg[data-bg-name="${screen2BgKey}"]`);
        const screen2BgImage = screen2Bg ? screen2Bg.querySelector("img") : null;
        const screen2SongTitles = screen2.querySelectorAll(".h1[data-bg-name]");
        const screen2SongTitle = screen2.querySelector(`.h1[data-bg-name="${screen2BgKey}"]`);
        const screen2ArrowLink = screen2.querySelector(".screen__arrow-link");

        if (screen2Bg) {
            screen2Bg.classList.add("is-active");
        }

        screen2SongTitles.forEach((title) => {
            if (title.dataset.bgName === screen2BgKey) {
                title.classList.add("is-active");
            }
        });

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            let screen2Animated = false;

            inView(
                screen2,
                () => {
                    if (screen2Animated) return;
                    screen2Animated = true;

                    if (screen2Bg) {
                        animate(
                            screen2Bg,
                            {
                                opacity: [0, 1],
                                scale: [1.04, 1],
                                filter: ["blur(18px)", "blur(0px)"],
                            },
                            {
                                duration: 0.9,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen2ElementsLeft) {
                        animate(
                            screen2ElementsLeft,
                            {
                                opacity: [0, 1],
                                x: [-90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.14,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen2ElementsRight) {
                        animate(
                            screen2ElementsRight,
                            {
                                opacity: [0, 1],
                                x: [90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.22,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen2Heading) {
                        animate(
                            screen2Heading,
                            {
                                opacity: [0, 1],
                                y: [24, 0],
                                filter: ["blur(10px)", "blur(0px)"],
                            },
                            {
                                duration: 0.65,
                                delay: 0.34,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen2Percent) {
                        const finalPercent = Number(screen2Percent.dataset.finalPercent || 46);

                        screen2Percent.textContent = `${finalPercent}%`;

                        animate(
                            screen2Percent,
                            {
                                opacity: [0, 1],
                                y: [48, 0],
                                scale: [0.7, 1],
                                filter: ["blur(18px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.48,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen2Subtitle) {
                        animate(
                            screen2Subtitle,
                            {
                                opacity: [0, 1],
                                y: [24, 0],
                                filter: ["blur(10px)", "blur(0px)"],
                            },
                            {
                                duration: 0.65,
                                delay: 0.66,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen2SongTitle) {
                        animate(
                            screen2SongTitle,
                            {
                                opacity: [0, 1],
                                y: [28, 0],
                                scale: [0.96, 1],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                delay: 0.78,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen2ArrowLink) {
                        animate(
                            screen2ArrowLink,
                            {
                                opacity: [0, 1],
                                x: [24, 0],
                                filter: ["blur(8px)", "blur(0px)"],
                            },
                            {
                                duration: 0.6,
                                delay: 0.94,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }
                },
                {
                    margin: "0px 0px -20% 0px",
                }
            );

            if (screen2Wrapper && screen2BgImage) {
                scroll(
                    animate(
                        screen2BgImage,
                        {
                            y: ["-10%", "0%"],
                            scale: [1, 1],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: screen2Wrapper,
                        offset: ["start end", "end start"],
                    }
                );
            }
        } else {
            if (screen2Bg) screen2Bg.style.opacity = "1";
            if (screen2ElementsLeft) screen2ElementsLeft.style.opacity = "1";
            if (screen2ElementsRight) screen2ElementsRight.style.opacity = "1";
            if (screen2Heading) screen2Heading.style.opacity = "1";

            if (screen2Percent) {
                const finalPercent = Number(screen2Percent.dataset.finalPercent || 46);
                screen2Percent.textContent = `${finalPercent}%`;
                screen2Percent.style.opacity = "1";
            }

            if (screen2Subtitle) screen2Subtitle.style.opacity = "1";
            if (screen2SongTitle) screen2SongTitle.style.opacity = "1";
            if (screen2ArrowLink) screen2ArrowLink.style.opacity = "1";
        }
    }

    /**
     * Screen 3 animation
     */
    const screen3 = document.querySelector(".screen--3");

    if (screen3) {
        const screen3Wrapper = screen3.querySelector(".screen__wrapper");
        const screen3Heading = screen3.querySelector(".screen__wrapper > div:first-child");
        const screen3ElementsLeft = screen3.querySelector(".screen__elements-left");
        const screen3ElementsRight = screen3.querySelector(".screen__elements-right");
        const screen3Text = screen3.querySelector(".screen__wrapper > div:nth-of-type(2)");
        const screen3Button = screen3.querySelector('a[role="button"]');
        const screen3Bg = screen3.querySelector(".screen__bg");
        const screen3BgImage = screen3.querySelector(".screen__bg img");

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            let screen3Animated = false;

            inView(
                screen3,
                () => {
                    if (screen3Animated) return;
                    screen3Animated = true;

                    if (screen3Bg) {
                        animate(
                            screen3Bg,
                            {
                                opacity: [0, 1],
                                scale: [1.04, 1],
                                filter: ["blur(18px)", "blur(0px)"],
                            },
                            {
                                duration: 0.9,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen3ElementsLeft) {
                        animate(
                            screen3ElementsLeft,
                            {
                                opacity: [0, 1],
                                x: [-90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.14,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen3ElementsRight) {
                        animate(
                            screen3ElementsRight,
                            {
                                opacity: [0, 1],
                                x: [90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.22,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen3Heading) {
                        animate(
                            screen3Heading,
                            {
                                opacity: [0, 1],
                                y: [24, 0],
                                filter: ["blur(10px)", "blur(0px)"],
                            },
                            {
                                duration: 0.65,
                                delay: 0.34,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen3Text) {
                        animate(
                            screen3Text,
                            {
                                opacity: [0, 1],
                                y: [28, 0],
                                scale: [0.96, 1],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                delay: 0.5,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen3Button) {
                        animate(
                            screen3Button,
                            {
                                opacity: [0, 1],
                                y: [32, 0],
                                scale: [0.86, 1],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                delay: 0.7,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );

                        animate(
                            screen3Button,
                            {
                                scale: [1, 1.04, 1],
                            },
                            {
                                duration: 1.8,
                                delay: 1.6,
                                repeat: Infinity,
                                easing: "ease-in-out",
                            }
                        );
                    }
                },
                {
                    margin: "0px 0px -20% 0px",
                }
            );

            if (screen3Wrapper && screen3BgImage) {
                scroll(
                    animate(
                        screen3BgImage,
                        {
                            y: ["-10%", "0%"],
                            scale: [1, 1],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: screen3Wrapper,
                        offset: ["start end", "end start"],
                    }
                );
            }
        } else {
            if (screen3Bg) screen3Bg.style.opacity = "1";
            if (screen3ElementsLeft) screen3ElementsLeft.style.opacity = "1";
            if (screen3ElementsRight) screen3ElementsRight.style.opacity = "1";
            if (screen3Heading) screen3Heading.style.opacity = "1";
            if (screen3Text) screen3Text.style.opacity = "1";
            if (screen3Button) screen3Button.style.opacity = "1";
        }
    }

    const playUserCodeRandomizer = (codeElement, finalCode = "3657") => {
        const randomDuration = 3200;
        const intervalSpeed = 55;
        const codeLength = finalCode.length;
        const startTime = performance.now();

        const getRandomCode = () => {
            return String(Math.floor(Math.random() * 10 ** codeLength)).padStart(codeLength, "0");
        };

        const randomize = () => {
            const elapsed = performance.now() - startTime;

            if (elapsed < randomDuration) {
                codeElement.textContent = getRandomCode();
                setTimeout(randomize, intervalSpeed);
                return;
            }

            codeElement.textContent = finalCode;

            const exitAnimation = animate(
                codeElement,
                {
                    x: [0, window.innerWidth],
                    opacity: [1, 0],
                    filter: ["blur(0px)", "blur(12px)"],
                },
                {
                    duration: 0.55,
                    easing: [0.7, 0, 0.84, 0],
                }
            );

            exitAnimation.finished.then(() => {
                codeElement.textContent = finalCode;

                const enterAnimation = animate(
                    codeElement,
                    {
                        x: [-window.innerWidth, 0],
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        filter: ["blur(12px)", "blur(0px)"],
                    },
                    {
                        duration: 0.85,
                        easing: [0.16, 1, 0.3, 1],
                    }
                );

                enterAnimation.finished.then(() => {
                    animate(
                        codeElement,
                        {
                            scale: [1, 1.06, 1],
                        },
                        {
                            duration: 1.4,
                            repeat: Infinity,
                            easing: "ease-in-out",
                        }
                    );
                });
            });
        };

        randomize();
    };

    /**
     * Screen 4 animation
     */
    const screen4 = document.querySelector(".screen--4");

    if (screen4) {
        const screen4Wrapper = screen4.querySelector(".screen__wrapper");
        const screen4Heading = screen4.querySelector(".screen__wrapper > div:first-child");
        const screen4ElementsLeft = screen4.querySelector(".screen__elements-left");
        const screen4ElementsRight = screen4.querySelector(".screen__elements-right");
        const screen4Text = screen4.querySelector(".screen__wrapper > div:nth-of-type(2)");
        const screen4UserCode = screen4.querySelector(".screen__user-code");
        const screen4Bg = screen4.querySelector(".screen__bg");
        const screen4BgImage = screen4.querySelector(".screen__bg img");

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
            let screen4Animated = false;

            inView(
                screen4,
                () => {
                    if (screen4Animated) return;
                    screen4Animated = true;

                    if (screen4Bg) {
                        animate(
                            screen4Bg,
                            {
                                opacity: [0, 1],
                                scale: [1.04, 1],
                                filter: ["blur(18px)", "blur(0px)"],
                            },
                            {
                                duration: 0.9,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen4ElementsLeft) {
                        animate(
                            screen4ElementsLeft,
                            {
                                opacity: [0, 1],
                                x: [-90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.14,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen4ElementsRight) {
                        animate(
                            screen4ElementsRight,
                            {
                                opacity: [0, 1],
                                x: [90, 0],
                                scale: [0.94, 1],
                                filter: ["blur(14px)", "blur(0px)"],
                            },
                            {
                                duration: 0.95,
                                delay: 0.22,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen4Heading) {
                        animate(
                            screen4Heading,
                            {
                                opacity: [0, 1],
                                y: [24, 0],
                                filter: ["blur(10px)", "blur(0px)"],
                            },
                            {
                                duration: 0.65,
                                delay: 0.34,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen4Text) {
                        animate(
                            screen4Text,
                            {
                                opacity: [0, 1],
                                y: [28, 0],
                                scale: [0.96, 1],
                                filter: ["blur(12px)", "blur(0px)"],
                            },
                            {
                                duration: 0.75,
                                delay: 0.52,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }

                    if (screen4UserCode) {
                        const finalCode = screen4UserCode.dataset.finalCode || screen4UserCode.textContent.trim() || "3657";

                        screen4UserCode.textContent = "0000";

                        playUserCodeRandomizer(screen4UserCode, finalCode);

                        animate(
                            screen4UserCode,
                            {
                                opacity: [0, 1],
                                y: [40, 0],
                                scale: [0.65, 1],
                                filter: ["blur(18px)", "blur(0px)"],
                            },
                            {
                                duration: 0.9,
                                delay: 0.72,
                                easing: [0.16, 1, 0.3, 1],
                            }
                        );
                    }
                },
                {
                    margin: "0px 0px -20% 0px",
                }
            );

            if (screen4Wrapper && screen4BgImage) {
                scroll(
                    animate(
                        screen4BgImage,
                        {
                            y: ["-10%", "0%"],
                            scale: [1, 1],
                        },
                        {
                            easing: "linear",
                        }
                    ),
                    {
                        target: screen4Wrapper,
                        offset: ["start end", "end start"],
                    }
                );
            }
        } else {
            if (screen4Bg) screen4Bg.style.opacity = "1";
            if (screen4ElementsLeft) screen4ElementsLeft.style.opacity = "1";
            if (screen4ElementsRight) screen4ElementsRight.style.opacity = "1";
            if (screen4Heading) screen4Heading.style.opacity = "1";
            if (screen4Text) screen4Text.style.opacity = "1";
            if (screen4UserCode) {
                const finalCode = screen4UserCode.dataset.finalCode || screen4UserCode.textContent.trim() || "3657";
                screen4UserCode.textContent = finalCode;
                screen4UserCode.style.opacity = "1";
            }
        }
    }

    // /**
    //  * Footer logo animation
    //  */
    // const footerLogo = document.querySelector("footer img");
    //
    // if (footerLogo) {
    //     const prefersReducedMotion = window.matchMedia(
    //         "(prefers-reduced-motion: reduce)"
    //     ).matches;
    //
    //     if (!prefersReducedMotion) {
    //         inView(
    //             footerLogo,
    //             () => {
    //                 animate(
    //                     footerLogo,
    //                     {
    //                         opacity: [0, 1],
    //                         y: [18, 0],
    //                         scale: [0.92, 1],
    //                         filter: ["blur(8px)", "blur(0px)"],
    //                     },
    //                     {
    //                         duration: 0.7,
    //                         easing: [0.16, 1, 0.3, 1],
    //                     }
    //                 );
    //             },
    //             {
    //                 margin: "0px 0px -10% 0px",
    //             }
    //         );
    //     } else {
    //         footerLogo.style.opacity = "1";
    //     }
    // }

    /**
     * YouTube modal
     */
    const youtubeModal = document.getElementById("youtubeModal");
    const youtubeIframe = document.getElementById("youtubeModalIframe");
    const youtubeButtons = document.querySelectorAll("[data-youtube]");
    const youtubeCloseButtons = document.querySelectorAll("[data-youtube-close]");

    if (youtubeModal && youtubeIframe && youtubeButtons.length) {
        const modalOverlay = youtubeModal.querySelector(".youtube-modal__overlay");
        const modalContent = youtubeModal.querySelector(".youtube-modal__content");
        const youtubeVideoWrapper = youtubeModal.querySelector(".youtube-modal__video");

        const isYoutubeShort = (url) => {
            try {
                const parsedUrl = new URL(url);

                return parsedUrl.hostname.includes("youtube.com") &&
                    parsedUrl.pathname.includes("/shorts/");
            } catch (error) {
                return false;
            }
        };

        const getYoutubeEmbedUrl = (url) => {
            try {
                const parsedUrl = new URL(url);
                let videoId = "";

                if (parsedUrl.hostname.includes("youtu.be")) {
                    videoId = parsedUrl.pathname.replace("/", "");
                }

                if (parsedUrl.hostname.includes("youtube.com")) {
                    if (parsedUrl.pathname.includes("/shorts/")) {
                        videoId = parsedUrl.pathname.split("/shorts/")[1].split("/")[0];
                    } else if (parsedUrl.searchParams.get("v")) {
                        videoId = parsedUrl.searchParams.get("v");
                    }
                }

                if (!videoId) return "";

                return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
            } catch (error) {
                return "";
            }
        };

        const openYoutubeModal = (youtubeUrl) => {
            const embedUrl = getYoutubeEmbedUrl(youtubeUrl);

            if (!embedUrl || !modalOverlay || !modalContent || !youtubeVideoWrapper) return;

            modalContent.classList.remove("portrait", "landscape");
            modalContent.classList.add(
                isYoutubeShort(youtubeUrl) ? "portrait" : "landscape"
            );
            youtubeVideoWrapper.classList.remove("portrait", "landscape");
            youtubeVideoWrapper.classList.add(
                isYoutubeShort(youtubeUrl) ? "portrait" : "landscape"
            );

            youtubeIframe.src = embedUrl;
            youtubeModal.classList.add("is-open");
            youtubeModal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";

            animate(
                modalOverlay,
                {
                    opacity: [0, 1],
                },
                {
                    duration: 0.25,
                    easing: easeOut,
                }
            );

            animate(
                modalContent,
                {
                    opacity: [0, 1],
                    scale: [0.86, 1],
                    y: [40, 0],
                    filter: ["blur(12px)", "blur(0px)"],
                },
                {
                    duration: 0.45,
                    easing: [0.16, 1, 0.3, 1],
                }
            );
        };

        const closeYoutubeModal = () => {
            if (!modalOverlay || !modalContent) return;

            const overlayAnimation = animate(
                modalOverlay,
                {
                    opacity: [1, 0],
                },
                {
                    duration: 0.2,
                    easing: easeOut,
                }
            );

            const contentAnimation = animate(
                modalContent,
                {
                    opacity: [1, 0],
                    scale: [1, 0.9],
                    y: [0, 24],
                    filter: ["blur(0px)", "blur(10px)"],
                },
                {
                    duration: 0.25,
                    easing: easeOut,
                }
            );

            Promise.all([
                overlayAnimation.finished,
                contentAnimation.finished,
            ]).then(() => {
                youtubeModal.classList.remove("is-open");
                youtubeModal.setAttribute("aria-hidden", "true");
                youtubeIframe.src = "";
                document.body.style.overflow = "";

                if (modalContent) {
                    modalContent.classList.remove("portrait", "landscape");
                }
                if (youtubeVideoWrapper) {
                    youtubeVideoWrapper.classList.remove("portrait", "landscape");
                }
            });
        };

        youtubeButtons.forEach((button) => {
            button.addEventListener("click", function (e) {
                e.preventDefault();

                const youtubeUrl = this.dataset.youtube;
                openYoutubeModal(youtubeUrl);
            });
        });

        youtubeCloseButtons.forEach((button) => {
            button.addEventListener("click", closeYoutubeModal);
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && youtubeModal.classList.contains("is-open")) {
                closeYoutubeModal();
            }
        });
    }
});