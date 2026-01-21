let pill = document.querySelectorAll("#nav-pills .nav-pill")
// console.log("print pill");

console.log(pill);
let activePill = null;

pill.forEach((node)=>{
    node.addEventListener(("click"), function(e){
        if (activePill) {
            // console.log(activePill);
            activePill.classList.remove('nav-pill-active');
        }
        // console.log("print node"); 
        // console.log(e.target);
        e.target.classList.add("nav-pill-active")
        activePill = e.target
    } )
})