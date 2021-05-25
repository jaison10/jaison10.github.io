//  DATA BEGIN
// Initial list data
images = ["challengersNew.png","vibeindianNew.png","g1.png","manish_vector2.png","comfyHouseNew.png","weatherAppNew.png"];
names = ["Web development Project","Web design Project","UAV Project","illustrator Project","VanillaJS Project","NodeJS Project"];

// Detailed projects data
projectsDetails = {
    "items" : [
        {
            "name":"Web dev Project",
            "project":"Website",
            "client":"Challengers",
            "lang":"HTML, CSS, JS",
            "link":"https://www.challengers.org.in",
            "linkName":"www.challengers.org.in",
            "image": {"image":"challengers.PNG"},
        },
        {
            "name":"Web design Project",
            "project":"Website",
            "client":"VibeIndian",
            "lang":"HTML, CSS, JS",
            "link":"https://www.vibeindian.in",
            "linkName":"www.vibeindian.in",
            "image": {"image":"vibeindian.PNG"},
        },
        {
            "name":"UAV Project",
            "project":"Medicine delivery system using hybdrid VTOL",
            "client":"SIH",
            "lang":"PX4 QGroundControl, OpenCV, PX4 MAVLink",
            "link":"https://www.hackster.io/393947/g-1-medicine-delivery-system-using-hybdrid-vtol-d731ff",
            "linkName":"G-1 (Medicine delivery system using hybdrid VTOL)",
            "image": {"image":"g1.png"},
        },
        {
            "name":"Illustrator Project",
            "project":"Vector design - Illustrator",
            "client":"Self",
            "lang":"Illustrator",
            "link":"",
            "linkName":"--",
            "image": {"image":"manish_vector2.png"},
        },
        {
            "name":"VanillaJS Project",
            "project":"VanillaJS Project",
            "client":"Self",
            "lang":"JavaScript, HTML",
            "link":"https://comfy-house-shop.netlify.app/",
            "linkName":"comfy-house-shop.netlify.app",
            "image": {"image":"comfyHouseNew.png"},
        },
        {
            "name":"NodeJS Project",
            "project":"Weather App - NodeJS",
            "client":"Self",
            "lang":"NodeJS, HTML",
            "link":"https://jaison-weather-application.herokuapp.com/",
            "linkName":"jaison-weather-application.herokuapp.com",
            "image": {
                "image":"weatherAppNew.png",
                "image2" : "weatherAppResNew.png"
            },
        }
    ]
}


//  DATA END


window.addEventListener("DOMContentLoaded",()=>{
    //  ----------------------------------------------------------------- Initial project list loading
    // proslist = document.getElementById("projectList");
    // const element = document.createElement("ul");
    // element.classList.add("row","grid");
    const element = document.getElementById("projUL");
    var result = "";
    for(var i=0; i<6; i++){
        result += `<li>
            <figure>
                <img src="img/projects/${images[i]}" alt="Portolio Image" />
                <div><span>${names[i]}</span></div>
            </figure>
        </li>`;
    }
    element.innerHTML = result;
    // proslist.appendChild(element);

    // ------------------------------------------------------------------ Detailed page of projects loading
    const elementDet = document.getElementById("projDetUL");
    var resultDet = "";
    
    prosDetItems = projectsDetails.items;
    prosDetItems.map(item =>{
        const { name, project, client, lang, link, linkName, video } = item;
        const { image, image2 } = item.image;
        if(image2 != undefined){
            console.log("undefined image2 found");
            resultDet += `<li>
            <figure>
                <figcaption>
                    <h3>${name}</h3>
                    <div class="row open-sans-font">
                        <div class="col-6 mb-2">
                            <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">${project}</span>
                        </div>
                        <div class="col-6 mb-2">
                            <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">${client}</span>
                        </div>
                        <div class="col-6 mb-2">
                            <i class="fa fa-code pr-2"></i><span class="project-label">Tool & Languages </span>: <span class="ft-wt-600 uppercase">${lang}</span>
                        </div>
                        <div class="col-6 mb-2">
                            <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="${link}" target="_blank">${linkName}</a></span>
                        </div>
                    </div>
                </figcaption>
                <div id="slider" class="carousel slide portfolio-slider" data-ride="carousel" data-interval="false">
                    <ol class="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" class="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="img/projects/${image}" alt="slide 1">
                        </div>
                        <div class="carousel-item">
                            <img src="img/projects/${image2}" alt="slide 2">
                        </div>
                    </div>
                </div>
            </figure>
        </li>`
        }
        else if(video != undefined){
            resultDet += `<li>
            <figure>
                <figcaption>
                    <h3>${name}</h3>
                    <div class="row open-sans-font">
                        <div class="col-6 mb-2">
                            <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">${project}</span>
                        </div>
                        <div class="col-6 mb-2">
                            <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">${client}</span>
                        </div>
                        <div class="col-6 mb-2">
                            <i class="fa fa-code pr-2"></i><span class="project-label">Tool </span>: <span class="ft-wt-600 uppercase">${lang}</span>
                        </div>
                        <div class="col-6 mb-2">
                            <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="${link}" target="_blank">${linkName}</a></span>
                        </div>
                    </div>
                </figcaption>
                <div class="videocontainer">
                    <iframe class="youtube-video" src="https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer" allowfullscreen></iframe>
                </div> 
            </figure>
        </li>`
        }
        else{
            resultDet += `<li>
            <figure>
                <figcaption>
                    <h3>${name}</h3>
                    <div class="row open-sans-font">
                        <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-file-text-o pr-2"></i><span class="project-label">Project </span>: <span class="ft-wt-600 uppercase">${project}</span>
                        </div>
                        <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-user-o pr-2"></i><span class="project-label">Client </span>: <span class="ft-wt-600 uppercase">${client}</span>
                        </div>
                        <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-code pr-2"></i><span class="project-label">Langages </span>: <span class="ft-wt-600 uppercase">${lang}</span>
                        </div>
                        <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-external-link pr-2"></i><span class="project-label">Preview </span>: <span class="ft-wt-600 uppercase"><a href="${link}" target="_blank">${linkName}</a></span>
                        </div>
                    </div>
                </figcaption>
                <img src="img/projects/${image}" alt="Portolio Image" />
            </figure>
        </li>`
        }
    });
    elementDet.innerHTML = resultDet;
    
});
