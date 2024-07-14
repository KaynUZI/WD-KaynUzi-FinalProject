<<<<<<< HEAD
const filterButtons = document.querySelectorAll(".filter-buttons .button");
const projectGrid = document.querySelector(".project-grid");

const projects = [
    {
        title: "Covid-19 App",
        category: "application",
        imageUrl: "images/covid-app.png", // Replace with your image path
        link: "https://your-project-link.com" // Replace with your project link
    },
    {
        title: "Labs",
        category: "app-design",
        imageUrl: "images/labs.png", // Replace with your image path
        link: "https://your-project-link.com" // Replace with your project link
    },
    {
        title: "Subscribe Today",
        category: "website-design",
        imageUrl: "images/subscribe-today.png", // Replace with your image path
        link: "https://your-project-link.com" // Replace with your project link
    },
    // Add more project objects in the same format
];

function createProjectElement(project) {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");

    projectItem.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.category}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    return projectItem;
}

function displayProjects(projectsToDisplay) {
    projectGrid.innerHTML = ''; // Clear existing projects

    projectsToDisplay.forEach(project => {
        const projectElement = createProjectElement(project);
        projectGrid.appendChild(projectElement);
    });
}

function filterProjects(category) {
    if (category === 'all') {
        displayProjects(projects);
    } else {
        const filteredProjects = projects.filter(project => project.category === category);
        displayProjects(filteredProjects);
    }
}

// Initial display of all projects
displayProjects(projects);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove("active"));

        // Add active class to the clicked button
        button.classList.add("active");

        const filterCategory = button.dataset.filter;
        filterProjects(filterCategory);
    });
=======
const filterButtons = document.querySelectorAll(".filter-buttons .button");
const projectGrid = document.querySelector(".project-grid");

const projects = [
    {
        title: "Covid-19 App",
        category: "application",
        imageUrl: "images/covid-app.png", // Replace with your image path
        link: "https://your-project-link.com" // Replace with your project link
    },
    {
        title: "Labs",
        category: "app-design",
        imageUrl: "images/labs.png", // Replace with your image path
        link: "https://your-project-link.com" // Replace with your project link
    },
    {
        title: "Subscribe Today",
        category: "website-design",
        imageUrl: "images/subscribe-today.png", // Replace with your image path
        link: "https://your-project-link.com" // Replace with your project link
    },
    // Add more project objects in the same format
];

function createProjectElement(project) {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");

    projectItem.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.category}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;

    return projectItem;
}

function displayProjects(projectsToDisplay) {
    projectGrid.innerHTML = ''; // Clear existing projects

    projectsToDisplay.forEach(project => {
        const projectElement = createProjectElement(project);
        projectGrid.appendChild(projectElement);
    });
}

function filterProjects(category) {
    if (category === 'all') {
        displayProjects(projects);
    } else {
        const filteredProjects = projects.filter(project => project.category === category);
        displayProjects(filteredProjects);
    }
}

// Initial display of all projects
displayProjects(projects);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove("active"));

        // Add active class to the clicked button
        button.classList.add("active");

        const filterCategory = button.dataset.filter;
        filterProjects(filterCategory);
    });
>>>>>>> 8b8e89aab0b36299bff3ee07c8d7ae9c061491ad
});