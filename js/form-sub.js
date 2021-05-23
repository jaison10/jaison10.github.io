// Form submission:

const URL = "https://script.google.com/macros/s/AKfycbzrMPHeOg98pOQ6bkMVAKR4K25ZivItmJpuOEUrEr9htsWBiH2EB6otLBbVcDxYOGzR2A/exec";
const form = document.forms["spreadSheet"];

form.addEventListener("submit", e=>{
    document.getElementById("submissionUpdate").innerText = "On air!";
    e.preventDefault();
    fetch(URL, {method: 'POST', body: new FormData(form)})
    .then(res =>{
        // alert("Thanks.");
        document.getElementById("submissionUpdate").innerText = "Oh, received! Thanks!";
        document.getElementById("submissionUpdate").style.color = "green";
        form.reset();
        setTimeout(() => {
            document.getElementById("submissionUpdate").innerText = "";
        }, 5000);
    }).catch(err =>{
        console.log("Error!");
        document.getElementById("submissionUpdate").innerText = "Oh, something is wrong, couldn't reach to me!";
        document.getElementById("submissionUpdate").style.color = "red";
    })
});