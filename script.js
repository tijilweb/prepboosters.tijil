// Complete PDF Data
const pdfData = [
    // Physics Books
    { 
        title: "Cengage Physics", 
        link: "https://drive.google.com/drive/folders/1oFFzlQsGRN144RqGVd5kr7tmib2IPcsz", 
        category: "Book", 
        type: "Physics",
        subject: "physics",
        description: "Complete physics reference for JEE Advanced & Mains"
    },
    { 
        title: "HC Verma (Concepts of Physics)", 
        link: "https://drive.google.com/drive/folders/1zi5sSNh2v0wF2O6Nx4JG6H84BsF1kgNP", 
        category: "Book", 
        type: "Physics",
        subject: "physics",
        description: "Classic physics textbook for concept building"
    },
    { 
        title: "DC Pandey", 
        link: "https://drive.google.com/drive/folders/1y4Ja3jOFvqF8ct5IxDL3Z78RT6tyB__e", 
        category: "Book", 
        type: "Physics",
        subject: "physics",
        description: "Problem-solving focused physics book"
    },
    { 
        title: "Irodov Problems", 
        link: "https://drive.google.com/drive/folders/1zLa_9k9U-7o-n4njA4MqSKQ0k3abMMxt", 
        category: "Book", 
        type: "Physics",
        subject: "physics",
        description: "Advanced physics problems for JEE Advanced"
    },

    // Chemistry Books
    { 
        title: "MS Chouhan (Organic Chemistry)", 
        link: "https://drive.google.com/file/d/1RoJoghPR3z0cX6ysOK7vUEINdFLDJgTJ/view", 
        category: "Book", 
        type: "Chemistry",
        subject: "chemistry",
        description: "Best book for organic chemistry practice"
    },
    { 
        title: "N Awasthi (Physical Chemistry)", 
        link: "https://drive.google.com/file/d/12u7I0JC__3vN9PQXqtMfbTNZVZCdtuzd/view", 
        category: "Book", 
        type: "Chemistry",
        subject: "chemistry",
        description: "Complete physical chemistry resource"
    },
    { 
        title: "VK Jaiswal (Inorganic Chemistry)", 
        link: "https://drive.google.com/file/d/1RsP_bm-_CMiIgpKiYDdwE6wh0BVxmJiF/view", 
        category: "Book", 
        type: "Chemistry",
        subject: "chemistry",
        description: "Must-have for inorganic chemistry"
    },

    // Maths Books
    { 
        title: "Cengage Maths", 
        link: "https://drive.google.com/drive/folders/1J8cCmrSTcUZ1cbFMqvhZLzenPmcLhJyb", 
        category: "Book", 
        type: "Maths",
        subject: "maths",
        description: "Complete mathematics reference"
    },
    { 
        title: "RD Sharma Objective", 
        link: "https://drive.google.com/drive/folders/1p1ZWgpoFAxHTDrqouUEB0ayAobnNTg8g", 
        category: "Book", 
        type: "Maths",
        subject: "maths",
        description: "Great for objective practice"
    },
    { 
        title: "A Das Gupta", 
        link: "https://drive.google.com/file/d/18Eqr9WXelWCEVYTkOKc1dx6Ew0leW3Sv/view", 
        category: "Book", 
        type: "Maths",
        subject: "maths",
        description: "Advanced problems for JEE"
    },

    // PYQs
    { 
        title: "JEE Advanced PYQs (2020-2023)", 
        link: "https://drive.google.com/drive/folders/1omIy2ZmvVDrRUSlJ5SK60YtPKOvxyUv_", 
        category: "PYQ", 
        type: "Advanced",
        subject: "all",
        description: "Last 3 years solved papers"
    },
    { 
        title: "JEE Mains PYQs (2020-2023)", 
        link: "https://drive.google.com/drive/folders/1odsK6Erh70ezoT6q_KEUzvO2TFgI9FPq", 
        category: "PYQ", 
        type: "Mains",
        subject: "all",
        description: "Chapter-wise solved papers"
    },

    // Modules
    { 
        title: "Arjuna JEE Modules", 
        link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5", 
        category: "Module", 
        type: "All Subjects",
        subject: "all",
        description: "Complete preparation modules"
    },
    { 
        title: "Allen Maths Module", 
        link: "https://drive.google.com/drive/folders/1yjWqnH4fqGaCx0SW5jO3vqJ66sPCL_8i", 
        category: "Module", 
        type: "Maths",
        subject: "maths",
        description: "Mathematics practice modules"
    },

    // Formulas
    { 
        title: "Physics Formula Sheet", 
        link: "https://drive.google.com/file/d/1GEgTz7GoWkkNpqQZOhqv5nMRdY_llY4M/view", 
        category: "Formula", 
        type: "Physics",
        subject: "physics",
        description: "All important formulas at one place"
    },
    { 
        title: "Periodic Table", 
        link: "https://drive.google.com/file/d/1ISJ3kmo31qhThYnn-V9Y232HJpk9Avrd/view", 
        category: "Formula", 
        type: "Chemistry",
        subject: "chemistry",
        description: "Complete periodic table with trends"
    }
];

// Function to render PDF cards
function renderPDFs(filteredData = pdfData) {
    const containers = {
        Book: document.getElementById('booksContainer'),
        PYQ: document.getElementById('pyqsContainer'),
        Module: document.getElementById('modulesContainer'),
        Formula: document.getElementById('formulasContainer')
    };

    // Clear previous content
    Object.values(containers).forEach(container => container.innerHTML = '');

    // Render each PDF
    filteredData.forEach(pdf => {
        const subjectClass = pdf.subject === 'physics' ? 'physics' : 
                          pdf.subject === 'chemistry' ? 'chemistry' : 'maths';

        const card = `
            <div class="card">
                <div class="card-body">
                    <span class="card-subject ${subjectClass}">${pdf.type}</span>
                    <h3 class="card-title">${pdf.title}</h3>
                    <p class="card-description">${pdf.description}</p>
                    <a href="${pdf.link}" class="download-btn" target="_blank">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;

        if (pdf.category === "Book") containers.Book.innerHTML += card;
        else if (pdf.category === "PYQ") containers.PYQ.innerHTML += card;
        else if (pdf.category === "Module") containers.Module.innerHTML += card;
        else if (pdf.category === "Formula") containers.Formula.innerHTML += card;
    });
}

// Search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = pdfData.filter(pdf => 
        pdf.title.toLowerCase().includes(searchTerm) || 
        pdf.type.toLowerCase().includes(searchTerm) ||
        pdf.description.toLowerCase().includes(searchTerm)
    );
    renderPDFs(filtered);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderPDFs();
});