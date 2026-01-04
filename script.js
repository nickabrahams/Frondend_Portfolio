document.addEventListener('DOMContentLoaded', () => {

    /* ===============================
       NAVIGATIE (HAMBURGER MENU)
    ================================ */
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li a');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    /* ===============================
       PROJECT DATA
    ================================ */
    const projects = {
        flutter: {
            title: "Weer App",
            image: "project_frontend_img/flutter_placeholder.png",
            description:
                "<strong>Project: Weer App</strong><br>" +
                "Dit project is een moderne Flutter-applicatie die is ontworpen om gebruikers te voorzien van actuele weerinformatie en interactieve kaartvisualisaties. " +
                "De app combineert real-time locatiegegevens met externe bronnen om een nauwkeurig beeld van de weersomstandigheden te geven.<br><br><br>",
            github: "https://github.com/nickabrahams/weer_app.git",
            youtube: "https://www.youtube.com/embed/nRGnogibQ-Y"
        },

        pokemon: {
            title: "Pokémon API Project",
            image: "project_frontend_img/javascript_screenshot.png",
            description:
                "<strong>Project: Pokémon API Project</strong><br>" +
                "In dit project heb ik gewerkt met JavaScript, een externe API en een database. Wanneer een Pokémon wordt opgezocht, wordt deze eerst opgehaald uit de database. Als deze daar niet in staat, wordt de PokéAPI gebruikt. De data wordt verwerkt en weergegeven op het scherm.<br><br><br>",
            github: "https://github.com/nickabrahams/javascript_eind.git",
            youtube: "https://www.youtube.com/embed/r79up2Z3ikw"
        },

        csharp: {
            title: "Voorraadbeheer Applicatie",
            image: "project_frontend_img/C%23_screenshot_3.png",
            description:
                "<strong>Project: Voorraadbeheer Applicatie</strong><br>" +
                "In deze opdracht heb ik een applicatie gemaakt waarmee je de voorraad van smartphones kunt beheren. Zodra je de applicatie opstart, wordt je gevraagd om in te loggen met een gebruikersnaam en wachtwoord. Vervolgens zie je een lijst met de huidige voorraad van smartphones. Aan de rechterkant kun je nieuwe telefoons toevoegen of bestaande aanpassen.<br><br>" +
                "Ik vond deze opdracht erg uitdagend, omdat ik hier nog niet veel ervaring mee had.<br><br><br>",
            github: "#",
            youtube: ""
        },



        calendar: {
            title: "Google Calendar Automatisering",
            image: "project_frontend_img/calendar_placeholder.png",
            description:
                "<strong>Project: Google Calendar Automatisering</strong><br>" +
                "Met Google Apps Script heb ik een automatisering gemaakt die geplande uren uit Google Calendar ophaalt en verwerkt in een spreadsheet.<br><br><br>",
            github: "https://github.com/jouwgithub/google-calendar-script",
            youtube: ""
        },

        pygame: {
            title: "Pixel Runner",
            image: "project_frontend_img/pygame_img.png",
            description:
                "<strong>Project: Pixel Runner</strong><br>" +
                "Pixel Runner is een dynamische 2D endless runner-game ontwikkeld in Python met de Pygame-bibliotheek. In deze game bestuurt de speler een geanimeerd personage dat obstakels moet ontwijken terwijl de moeilijkheidsgraad continu toeneemt.<br><br><br>",
            github: "https://github.com/nickabrahams/pygame---1.git",
            youtube: "https://www.youtube.com/embed/MnSN2-i8U_c"
        },

        project5: {
            title: "Normaliseren",
            image: "project_frontend_img/normaliseren%20frontend.png",
            description:
                "<strong>Project: Normaliseren & Databaseontwerp</strong><br>" +
                "Voor dit project heb ik gewerkt aan het ontwerpen en normaliseren van een database. Het doel was om gegevens op een overzichtelijke en efficiënte manier op te slaan. Tijdens het normaliseren heb ik de database opgesplitst in meerdere tabellen om dubbele gegevens te voorkomen en de structuur te verbeteren.<br><br>" +
                "Ik heb hierbij rekening gehouden met relaties tussen tabellen en het correct gebruik van primaire en vreemde sleutels. Door het toepassen van normalisatie is de database beter onderhoudbaar en minder foutgevoelig geworden. Dit project heeft mij geholpen om inzicht te krijgen in hoe een goede databasestructuur wordt opgebouwd en waarom dit belangrijk is binnen softwareontwikkeling.<br><br><br>",
            github: "#",
            youtube: ""
        },

        project3: {
            title: "Python Cursus",
            image: "project_frontend_img/Python-logo-1024x576.png",
            image2: "project_frontend_img/certificaat.png",
            description:
                "<strong>Python</strong><br><br>" +
                "Tijdens mijn opleiding heb ik gewerkt met Python voor het ontwikkelen van eenvoudige scripts en toepassingen. Ik heb Python gebruikt om logisch na te denken over problemen en om oplossingen stapsgewijs uit te werken. Hierbij heb ik gewerkt met variabelen, voorwaarden, lussen en functies.<br><br>" +
                "Door met Python te werken heb ik mijn programmeerlogica verder ontwikkeld. Het project heeft mij geholpen om beter te begrijpen hoe code gestructureerd wordt en hoe problemen efficiënt kunnen worden opgelost binnen softwareontwikkeling.<br><br><br>",
            github: "#",
            youtube: ""
        },

        // Home Section Boxes
        "over-mij": {
            title: "Over mij",
            image: "project_frontend_img/over mij/IMG_8339.JPG",
            image2: "project_frontend_img/over mij/IMG_7306.jpg",
            image3: "project_frontend_img/over mij/IMG_8347.jpg",
            description: (() => {
                const birthDate = new Date("2006-11-25");
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return "Ik ben Nick, " + age + " jaar oud en woon in Beverwijk. Ik volg de opleiding Software Developer en ben gemotiveerd om mij verder te ontwikkelen binnen softwareontwikkeling. In mijn vrije tijd ben ik graag actief, sport ik regelmatig en werk ik aan projecten om mijn vaardigheden verder te verbeteren.<br><br><br>";
            })(),
            github: "",
            youtube: ""
        },
        hobbies: {
            title: "Hobby's",
            image: "project_frontend_img/hobbys/IMG_8240.JPG",
            description: "In mijn vrije tijd sport ik regelmatig en ga ik meerdere keren per week naar de sportschool.<br>Daarnaast speel ik tennis en vind ik het leuk om te koken. Sporten en koken zijn voor mij belangrijke manieren om actief en creatief bezig te zijn.<br><br><br>",
            github: "",
            youtube: ""
        },
        werk: {
            title: "Werk",
            image: "project_frontend_img/werk/fd34ef23-db3d-450d-b973-39ce9ec16b77.jpg",
            image2: "project_frontend_img/werk/de vrijheit.jpg",
            image3: "project_frontend_img/werk/IMG_8242.jpg",
            description: "Tijdens de afgelopen drie zomers heb ik in de keuken gewerkt bij strandpaviljoen De Vrijheit in Heemskerk. Hier heb ik ervaring opgedaan met werken in een drukke keuken en samenwerken binnen een team.<br><br>Op dit moment werk ik bij Ome Pietje in Beverwijk. Ik heb bewust voor deze stap gekozen, omdat dit werk voor mij uitdagender is en er op een hoger culinair niveau wordt gekookt. Hierdoor blijf ik mijzelf ontwikkelen en leer ik werken met meer verantwoordelijkheid.<br><br><br>",
            github: "",
            youtube: ""
        }
    };

    /* ===============================
       MODAL ELEMENTEN
    ================================ */
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalImage2 = document.getElementById('modalImage2');
    const modalImage3 = document.getElementById('modalImage3');
    const modalMedia = document.getElementById('modalMedia');
    const modalDescription = document.getElementById('modalDescription');
    const modalGithub = document.getElementById('modalGithub');
    const modalVideo = document.getElementById('modalVideo');
    const modalClose = document.getElementById('modalClose');

    /* ===============================
       MODAL OPENEN
    ================================ */
    document.querySelectorAll('.project-card, .box').forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.dataset.project;
            const project = projects[projectKey];

            if (!project) return;

            modal.dataset.currentProject = projectKey;
            modalTitle.textContent = project.title;
            modalDescription.innerHTML = project.description;
            if (project.image) {
                modalImage.src = project.image;
                modalImage.style.display = 'block';
                modalMedia.style.display = 'grid'; // Restore grid if it was hidden
            } else {
                modalImage.style.display = 'none';
                // If no video either, we might want to hide the whole media container later
            }

            if (project.image2) {
                modalImage2.src = project.image2;
                modalImage2.style.display = 'block';
            } else {
                modalImage2.style.display = 'none';
            }

            if (project.image3) {
                modalImage3.src = project.image3;
                modalImage3.style.display = 'block';
            } else {
                modalImage3.style.display = 'none';
            }

            // Check if we need a layout (two images OR three OR image + video)
            const hasTwoImages = !!project.image && !!project.image2 && !project.image3;
            const hasThreeImages = !!project.image && !!project.image2 && !!project.image3;
            const hasImageAndVideo = !!project.image && !!project.youtube;

            modalMedia.classList.remove('dual-media', 'triple-media');

            if (hasThreeImages) {
                modalMedia.classList.add('triple-media');
            } else if (project.image2 || hasImageAndVideo) {
                modalMedia.classList.add('dual-media');
            }

            // If completely text-only (no image1, no image2, no image3, no video), hide the container
            if (!project.image && !project.image2 && !project.image3 && !project.youtube) {
                modalMedia.style.display = 'none';
            } else {
                modalMedia.style.display = 'grid';
            }

            if (project.github && project.github !== "#") {
                modalGithub.href = project.github;
                modalGithub.style.display = 'inline-block';
            } else {
                modalGithub.style.display = 'none';
            }

            if (project.youtube) {
                modalVideo.src = project.youtube;
                modalVideo.style.display = 'block';
            } else {
                modalVideo.style.display = 'none';
                modalVideo.src = "";
            }

            modal.classList.add('active');
            document.body.classList.add('modal-open');
        });
    });

    /* ===============================
       MODAL SLUITEN
    ================================ */
    function closeModal() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
        modalVideo.src = ""; // stopt YouTube video
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    /* ===============================
       BEKIJK MEER / MINDER – TOGGLE
    ================================ */

    const bekijkMeerBtn = document.getElementById('bekijkMeerBtn');
    const extraProjecten = document.getElementById('extraProjecten');

    if (bekijkMeerBtn && extraProjecten) {
        bekijkMeerBtn.addEventListener('click', () => {
            const isOpen = extraProjecten.classList.contains('show');

            if (isOpen) {
                // inklappen
                extraProjecten.classList.remove('show');
                bekijkMeerBtn.textContent = 'Bekijk meer';
            } else {
                // uitklappen
                extraProjecten.classList.add('show');
                bekijkMeerBtn.textContent = 'Bekijk minder';
            }
        });
    }
    /* ===============================
       IMAGE LIGHTBOX (ZOOM) - Alleen Home Boxes
    ================================ */
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Luister naar klikken op alle modal afbeeldingen
    modalMedia.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            const currentKey = modal.dataset.currentProject;

            // Check of het een "Home Box" is (Over mij, Hobby's, Werk)
            const isHomeBox = ['over-mij', 'hobbies', 'werk'].includes(currentKey);

            if (isHomeBox && img.src) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.classList.add('modal-open');
            }
        });
    });

    // Lightbox sluiten
    function closeLightbox() {
        if (lightbox && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            // Alleen modal-open verwijderen als de gewone modal NIET open is
            if (!modal.classList.contains('active')) {
                document.body.classList.remove('modal-open');
            }
            setTimeout(() => { lightboxImg.src = ""; }, 300);
        }
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            // Sluiten als je op de achtergrond klikt of op de close button
            closeLightbox();
        });
    }

    // Esc toets ook voor lightbox
    const originalKeyDown = document.onkeydown;
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

});
