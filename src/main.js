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
                            y: ["-12%", "12%"],
                            scale: [1.12, 1.12],
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