const Projects = [
	{
		name: "PCJ Clone",
		about:
			"PC Jeweller is India's leading fine jewellery discovery platform focusing on giving YOU an awesome jewellery buying experience. At PC Jeweller we strive to provide you the largest collection of curated designs for every occasion",
		img: "https://user-images.githubusercontent.com/91409265/192078064-3a9d36ee-62c9-4948-bb33-a1124a9becca.png",
		gitrepo: "https://github.com/Ankit-Mishra07/hokmakeup",
		// video: "#",
		// blog: "#",
		tech_stack: "HTML | CSS | JAVASCRIPT | Bootstrap",
		tech_stackicons: [
			`<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
			`<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
			`<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
		],
		project_link: "https://eloquent-arithmetic-c3b22a.netlify.app/index.html",
		project_type: "Team Project",
		category: ["all", "html"],
	},
	{
		name: "PCJ Clone",
		about:
			"PC Jeweller is India's leading fine jewellery discovery platform focusing on giving YOU an awesome jewellery buying experience. At PC Jeweller we strive to provide you the largest collection of curated designs for every occasion",
		img: "https://user-images.githubusercontent.com/91409265/192078064-3a9d36ee-62c9-4948-bb33-a1124a9becca.png",
		gitrepo: "https://github.com/rovin-singh/pcjewellers.git",
		// video: "#",
		// blog: "#",
		tech_stack: "HTML | CSS | JAVASCRIPT | Bootstrap",
		tech_stackicons: [
			`<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
			`<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
			`<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
		],
		project_link: "https://eloquent-arithmetic-c3b22a.netlify.app/index.html",
		project_type: "Team Project",
		category: ["all", "html"],
	},
];

let projects__container = document.getElementById("projects--container");

let all_projects = document.querySelector(".all_projects");
// let react_projects = document.querySelector(".react_projects");
// let mern_projects = document.querySelector(".mern_projects");
// let other_projects = document.querySelector(".other_projects");
// let html_projects = document.querySelector(".html_projects");
// all_projects.classList.add("active_tech_project");



// all_projects.addEventListener("click", () => {
// 	filterProjects("all");
// 	all_projects.classList.add("active_tech_project");
// 	react_projects.classList.remove("active_tech_project");
// 	mern_projects.classList.remove("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.remove("active_tech_project");
// });
// react_projects.addEventListener("click", () => {
// 	filterProjects("react");
// 	all_projects.classList.remove("active_tech_project");
// 	react_projects.classList.add("active_tech_project");
// 	mern_projects.classList.remove("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.remove("active_tech_project");
// });
// mern_projects.addEventListener("click", () => {
// 	filterProjects("mern");
// 	all_projects.classList.remove("active_tech_project");
// 	react_projects.classList.remove("active_tech_project");
// 	mern_projects.classList.add("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.remove("active_tech_project");
// });



// other_projects.addEventListener("click", () => {
//     filterProjects("other");
//     all_projects.classList.remove("active_tech_project")
//     react_projects.classList.remove("active_tech_project")
//     mern_projects.classList.remove("active_tech_project")
//     // other_projects.classList.add("active_tech_project")
//     html_projects.classList.remove("active_tech_project")
// })

// html_projects.addEventListener("click", () => {
// 	filterProjects("html");
// 	all_projects.classList.remove("active_tech_project");
// 	react_projects.classList.remove("active_tech_project");
// 	mern_projects.classList.remove("active_tech_project");
// 	// other_projects.classList.remove("active_tech_project")
// 	html_projects.classList.add("active_tech_project");
// });

function filterProjects(basis) {
	if (basis === "all") {
		let filtered = Projects.filter((el) => {
			return el.category.includes(basis);
		});
		displayProjectData(filtered.reverse());
	} else {
		let filtered = Projects.filter((el) => {
			return el.category.includes(basis);
		});
		displayProjectData(filtered);
	}
}

function displayProjectData(Projects) {
	projects__container.innerHTML = null;
	Projects.reverse().forEach((pro) => {
		let main = document.createElement("div");
		main.setAttribute("class", "portfolio-item padd-15");
		main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name">${pro.name}</h3>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <a href=${pro.project_link} target="_blank" title="Demo" class="see-project"><i class="fas fa-eye"></i></a>
      <a href=${pro.gitrepo} target="_blank" title="GitHub Repository" class="github-repo"><i class="fab fa-github"></i></a>
      </div>
      <div class="project_tech_box">
      <span class="TechStacks__text">TechStacks: </span> ${pro.tech_stack}
      </div>
      
    </div>
  </div>
    `;
		projects__container.append(main);
	});
}

displayProjectData(Projects);
