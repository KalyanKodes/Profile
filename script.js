// import "https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js";
const profileElement = document.querySelector('.profileImage');
const profileId = document.querySelector(".profileId");
const profileName = document.querySelector(".name");
const roleName = document.querySelector('.roleName');
const showProjectsElement = document.querySelector('.showProjects');
const projectsCard = document.querySelector('.projectCards');
const userName = "KalyanKodes"
var imageUrl = "";
const gitHubApi = `https://api.github.com/users/${userName}`;
let result;




fetch(gitHubApi).then((response) => response.json()).then((data) =>{
    retriveData(data)
})

function retriveData(data){
    imageUrl = data.avatar_url;
    profileId.innerHTML = `@${data.login}`;
    profileName.innerHTML = data.name
    profileElement.src = imageUrl;
    renderRole()
}


document.querySelector('.githubProjectsLink').addEventListener('click' , ()=>{
    document.querySelector(".githubProjects").classList.toggle('show')
})

document.querySelector('.fa-circle-xmark').addEventListener('click' , ()=>{
    document.querySelector('.wrapper').classList.toggle('show');
})

showProjectsElement.addEventListener('click' , ()=>{
    document.querySelector('.wrapper').classList.toggle('show');
})

function renderRole(){
    var typed = new Typed(roleName , {
        strings: ["Student" , "Freelancer" , "Front-End WebDeveloper"],
        typeSpeed: 100,
        backSpeed: 0,
        loop: true
    })
}
