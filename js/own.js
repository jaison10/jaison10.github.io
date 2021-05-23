var desigs = ["Student","Web developer","Programmer","UI designer","Researcher","Video editor"];

//     MOVING DESIGNATION CONTENT BACKWARDS - Removing.

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     let i = 0;
//     document.getElementById("designation").innerText = desigs[i];

//     setInterval(() => {
//         document.getElementById("designation").innerText = desigs[i];
//         i++;
//         if(i == 6){
//             i = 0;
//         }
        
//         let current = document.getElementById("designation").textContent;
//             let len = current.length;
//             // console.log(current);
//             // console.log(len);
//             let time = Math.floor(2000/len);
//             // console.log(time);
//             var count = 1;
//             var newCurrent = current;
//             var inner = setInterval(() => {
//                 newCurrent = newCurrent.substring(0, newCurrent.length - 1);
//                 count++;
//                 // console.log(newCurrent);
//                 if(count == current.length){
//                     clearInterval(inner);
//                 }
//                 document.getElementById("designation").innerText = newCurrent;
//             }, time);
//             // document.getElementById("designation").innerText = newCurrent;
//     }, 2000);
// });


// Designation CONTENT ADDED - Forward.

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    let i = 0;
    document.getElementById("designation").innerText = "Welcome!"
    setInterval(() => {
        let current = desigs[i];
        let len = current.length;
        let time = Math.floor(2000/len);
        var count = 1;
        var inner = setInterval(() => {
            newCurrent = current.substring(0, count);
            count++;
            if(count == current.length+1){
                clearInterval(inner);
            }
            document.getElementById("designation").innerText = newCurrent;
        }, time-100);

        i++;
        if(i == 6){
            i = 0;
        }
    }, 2000);
});




