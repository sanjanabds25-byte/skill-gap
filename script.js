/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "70px";
        nav.style.right = "5%";
        nav.style.background = "white";
        nav.style.padding = "20px";
        nav.style.borderRadius = "10px";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    }
}


/* =========================================
   CAREER DATA
========================================= */

const careerData = {

    web: {

        name: "Web Developer",

        required: [
            "HTML / CSS",
            "JavaScript",
            "Git / GitHub",
            "Database Basics"
        ],

        training: [
            "Advanced JavaScript",
            "Git & GitHub",
            "Database Fundamentals",
            "Responsive Web Design"
        ]

    },


    data: {

        name: "Data Analyst",

        required: [
            "MS Excel",
            "SQL",
            "Python",
            "Data Visualization"
        ],

        training: [
            "Advanced Excel",
            "SQL",
            "Python for Data Analysis",
            "Power BI / Data Visualization"
        ]

    },


    digital: {

        name: "Digital Marketing Executive",

        required: [
            "Communication",
            "SEO",
            "Social Media",
            "Content Creation"
        ],

        training: [
            "SEO Fundamentals",
            "Social Media Marketing",
            "Content Writing",
            "Digital Marketing Analytics"
        ]

    },


    design: {

        name: "Graphic Designer",

        required: [
            "Graphic Design",
            "UI Principles",
            "Creativity",
            "Design Software"
        ],

        training: [
            "Graphic Design Fundamentals",
            "UI/UX Basics",
            "Design Tools",
            "Portfolio Development"
        ]

    },


    business: {

        name: "Entrepreneur / Business Professional",

        required: [
            "Communication",
            "Business Planning",
            "Financial Basics",
            "Leadership"
        ],

        training: [
            "Entrepreneurship",
            "Financial Literacy",
            "Business Communication",
            "Leadership Skills"
        ]

    }

};


/* =========================================
   SKILL FORM
========================================= */

document
    .getElementById("skillForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const career = document.getElementById("career").value;

        const employment =
            document.getElementById("employment").value;


        if (!career) {

            alert("Please select your career interest.");

            return;
        }


        const selectedSkills =
            Array.from(
                document.querySelectorAll(
                    '.skills input:checked'
                )
            ).map(
                checkbox => checkbox.value
            );


        const data = careerData[career];


        /* ---------------------------------
           MAP USER SKILLS
        --------------------------------- */

        const skillMap = {

            html: "HTML / CSS",

            javascript: "JavaScript",

            python: "Python",

            excel: "MS Excel",

            communication: "Communication",

            design: "Graphic Design"

        };


        const currentSkills =
            selectedSkills.map(
                skill => skillMap[skill]
            );


        /* ---------------------------------
           CALCULATE GAP
        --------------------------------- */

        let matched = 0;

        data.required.forEach(
            requiredSkill => {

                if (
                    currentSkills.includes(requiredSkill)
                ) {
                    matched++;
                }

            }
        );


        const gapCount =
            data.required.length - matched;


        let gapLevel;
        let description;


        if (gapCount <= 1) {

            gapLevel = "LOW";

            description =
                "Your current skills are closely aligned with your selected career.";

        }

        else if (gapCount <= 2) {

            gapLevel = "MEDIUM";

            description =
                "You have a good foundation, but some important skills need improvement.";

        }

        else {

            gapLevel = "HIGH";

            description =
                "There is a significant gap between your current skills and the selected career requirements.";

        }


        /* ---------------------------------
           SHOW RESULT
        --------------------------------- */

        document
            .getElementById("result")
            .classList.remove("hidden");


        document
            .getElementById("resultTitle")
            .textContent =
            data.name + " – Skill Analysis";


        document
            .getElementById("gapLevel")
            .textContent =
            gapLevel + " SKILL GAP";


        document
            .getElementById("gapDescription")
            .textContent =
            description;


        /* ---------------------------------
           RECOMMENDED SKILLS
        --------------------------------- */

        const recommendedSkills =
            document.getElementById(
                "recommendedSkills"
            );


        recommendedSkills.innerHTML = "";


        data.required.forEach(
            skill => {

                const li =
                    document.createElement("li");

                if (currentSkills.includes(skill)) {

                    li.textContent =
                        "✓ " + skill + " – Already have";

                }

                else {

                    li.textContent =
                        "⚠ " + skill + " – Need improvement";

                }

                recommendedSkills.appendChild(li);

            }
        );


        /* ---------------------------------
           TRAINING
        --------------------------------- */

        const training =
            document.getElementById(
                "recommendedTraining"
            );


        training.innerHTML = "";


        data.training.forEach(
            item => {

                const li =
                    document.createElement("li");

                li.textContent = item;

                training.appendChild(li);

            }
        );


        /* ---------------------------------
           CAREER
        --------------------------------- */

        document
            .getElementById(
                "recommendedCareer"
            )
            .textContent =
            data.name;


        document
            .getElementById(
                "careerMessage"
            )
            .textContent =
            "Based on your selected career interest and skill profile, this career path can be explored after improving the recommended skills.";


        /* ---------------------------------
           SCROLL TO RESULT
        --------------------------------- */

        document
            .getElementById("result")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =========================================
   JOB SEARCH
========================================= */

function filterJobs() {

    const search =
        document
            .getElementById("jobSearch")
            .value
            .toLowerCase();


    const jobs =
        document.querySelectorAll(
            ".job-card"
        );


    jobs.forEach(job => {

        const keywords =
            job
                .getAttribute("data-search")
                .toLowerCase();


        if (keywords.includes(search)) {

            job.style.display = "block";

        } else {

            job.style.display = "none";

        }

    });

}


/* =========================================
   JOB MODAL
========================================= */

const jobData = {

    "Junior Web Developer": {

        description:
            "Entry-level role focused on building and maintaining websites and web applications.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Git / GitHub"
        ]

    },


    "Data Analyst": {

        description:
            "Analyze data, create reports and help organizations make data-driven decisions.",

        skills: [
            "MS Excel",
            "SQL",
            "Python",
            "Data Visualization"
        ]

    },


    "Digital Marketing Executive": {

        description:
            "Plan and manage digital marketing activities across online platforms.",

        skills: [
            "SEO",
            "Social Media",
            "Content Creation",
            "Communication"
        ]

    },


    "Graphic Designer": {

        description:
            "Create visual content for digital platforms, brands and marketing campaigns.",

        skills: [
            "Graphic Design",
            "Creativity",
            "UI Principles",
            "Design Software"
        ]

    }

};


function showJob(jobName) {

    const modal =
        document.getElementById("jobModal");


    const data =
        jobData[jobName];


    document
        .getElementById("modalTitle")
        .textContent =
        jobName;


    document
        .getElementById("modalDescription")
        .textContent =
        data.description;


    const skills =
        document.getElementById(
            "modalSkills"
        );


    skills.innerHTML = "";


    data.skills.forEach(
        skill => {

            const li =
                document.createElement("li");

            li.textContent = skill;

            skills.appendChild(li);

        }
    );


    modal.style.display = "flex";

}


function closeModal() {

    document
        .getElementById("jobModal")
        .style.display = "none";

}


window.onclick = function(event) {

    const modal =
        document.getElementById("jobModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};


/* =========================================
   CHARTS
========================================= */

const skillsCtx =
    document
        .getElementById("skillsChart")
        .getContext("2d");


new Chart(
    skillsCtx,
    {

        type: "bar",

        data: {

            labels: [
                "Communication",
                "Digital Skills",
                "Data Analysis",
                "Programming",
                "Leadership"
            ],

            datasets: [

                {
                    label: "Skill Demand",

                    data: [
                        85,
                        90,
                        78,
                        88,
                        70
                    ]

                }

            ]

        },

        options: {

            responsive: true,

            scales: {

                y: {

                    beginAtZero: true,

                    max: 100

                }

            }

        }

    }
);


const employmentCtx =
    document
        .getElementById("employmentChart")
        .getContext("2d");


new Chart(
    employmentCtx,
    {

        type: "doughnut",

        data: {

            labels: [
                "Employed",
                "Students",
                "Looking for Work",
                "Self Employed"
            ],

            datasets: [

                {

                    data: [
                        35,
                        30,
                        25,
                        10
                    ]

                }

            ]

        },

        options: {

            responsive: true

        }

    }
);


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

document
    .querySelectorAll(".navbar nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                if (window.innerWidth <= 900) {

                    document
                        .querySelector(
                            ".navbar nav"
                        )
                        .style.display = "none";

                }

            }
        );

    });