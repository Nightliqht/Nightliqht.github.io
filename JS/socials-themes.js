function toggleTheme() {
            // Select the <link> element
            let theme = document.getElementById('theme');

            // Toggle between light.css and dark.css
            if (theme.getAttribute('href') == 'css/socials/light.css') {
                theme.setAttribute('href', 'css/socials/dark.css');
            } else {
                theme.setAttribute('href', 'css/socials/light.css');
            }
        }
