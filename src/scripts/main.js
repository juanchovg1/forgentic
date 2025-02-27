// This file contains JavaScript code that runs on DOMContentLoaded.
// It connects to Supabase using placeholders for the URL and ANON KEY,
// fetches data from the "projects" table, dynamically renders each project
// inside the projects section, and handles the contact form submission.

document.addEventListener('DOMContentLoaded', () => {
    const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
    const SUPABASE_ANON_KEY = 'your-anon-key';
    
    const fetchProjects = async () => {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/projects`, {
            headers: {
                'apikey': SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        const projects = await response.json();
        renderProjects(projects);
    };

    const renderProjects = (projects) => {
        const projectsSection = document.getElementById('projects');
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            `;
            projectsSection.appendChild(projectElement);
        });
    };

    const handleContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    };

    fetchProjects();
    handleContactForm();
});