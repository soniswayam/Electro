// import './bootstrap';
import "./bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap/dist/js/bootstrap.bundle.min.js";

// Active Link Highlighting Script
<ul class="navbar-nav mx-auto mb-2 mb-lg-0 main-nav">
    <li class="nav-item">
        <a class="nav-link" href="/">
            Home
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/shop">
            Shop
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/contact">
            Contact
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="/about">
            About
        </a>
    </li>
</ul>;

document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = window.location.pathname;
    document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });
});
// End of Active Link Highlighting Script