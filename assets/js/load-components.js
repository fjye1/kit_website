async function loadComponent(id, htmlPath, cssPath = null) {
    try {
        // Load HTML
        const res = await fetch(htmlPath);
        const html = await res.text();
        document.getElementById(id).innerHTML = html;

        // Load CSS if provided
        if (cssPath) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = cssPath;
            document.head.appendChild(link);
        }
    } catch (err) {
        console.error(`Failed to load component ${id}:`, err);
    }
}

// Load header with its CSS
loadComponent("header-container", "/components/_header.html", "/assets/css/pages/header.css");

// Load footer with its CSS
loadComponent("footer-container", "/components/_footer.html", "/assets/css/pages/footer.css");