
// --------------------------- onclick ==> Skills, Expeience, Education -----------------------

function fun(x)
{
    // button
    let First = document.getElementById("first-p");
    let Second = document.getElementById("second-p");
    let Third = document.getElementById("third-p");

    // 3 dabba
    let Skill = document.getElementById("skill-content-1");
    let Experience = document.getElementById("skill-content-2");
    let Education = document.getElementById("skill-content-3");



    if(x==1){
        Skill.style.display = "block";
        Experience.style.display = "none";
        Education.style.display = "none";

        First.style.borderBottom = "3px solid rgb(255,0,128)";
        Second.style.borderBottom = "none";
        Third.style.borderBottom = "none";
    }

    if(x==2){
        Skill.style.display = "none";
        Experience.style.display = "block";
        Education.style.display = "none";

        First.style.borderBottom = "none";
        Second.style.borderBottom = "3px solid rgb(255,0,128)";
        Third.style.borderBottom = "none";
    }

    if(x==3){
        Skill.style.display = "none";
        Experience.style.display = "none";
        Education.style.display = "block";

        First.style.borderBottom = "none";
        Second.style.borderBottom = "none";
        Third.style.borderBottom = "3px solid rgb(255,0,128)";
    }

}