var desigs = ["Web developer","UI designer","Researcher","Video editor"];

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let i = 0;
    // while(i<4){
        document.getElementById("designation").innerText = desigs[i];
    //     i++;
    //     if(i == 4){
    //         i = 0;
    //     }
    // }
    setInterval(() => {
        document.getElementById("designation").innerText = desigs[i];
        i++;
        if(i == 4){
            i = 0;
        }
    }, 2000);
});