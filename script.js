document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Luxury Preloader Dismissal
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        }, 1000); // Gives a high-end polished delay sensation
    });

    // 2. Sticky Navbar Tint Modification on Scroll
    const navbar = document.querySelector(".luxury-navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.8rem 0";
            navbar.style.backgroundColor = "rgba(11, 11, 11, 0.98)";
        } else {
            navbar.style.padding = "1.2rem 0";
            navbar.style.backgroundColor = "rgba(17, 17, 17, 0.92)";
        }
    });

    // 3. Smooth Reveal-on-Scroll Animations Using Intersection Observer
    const revealElements = document.querySelectorAll(".data-reveal");
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                
                // If it contains metric numbers, trigger counting animation
                const countElement = entry.target.querySelector(".count-up");
                if (countElement) {
                    triggerCountUp(countElement);
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 4. Metric Animated Counter (Smooth Micro-interaction)
    function triggerCountUp(el) {
        const target = +el.getAttribute("data-target");
        let count = 0;
        const speed = target / 50; // Adjust for pace fluidity

        const updateCount = () => {
            count += speed;
            if (count < target) {
                el.innerText = Math.floor(count) + "+";
                setTimeout(updateCount, 30);
            } else {
                el.innerText = target + "+";
            }
        };
        updateCount();
    }
});