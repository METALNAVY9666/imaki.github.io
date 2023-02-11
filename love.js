// javascript

var question = 0;

function CheckCode(){
    let code = prompt("Quel est ton code","4 chiffres");
    if (code !== "0708"){
        alert("Oh, il est tombé ! (mauvais mot de passe)");
    }
    else{
        document.getElementById("code").style.display = "none";
        document.getElementById("validate").style.display = "";
        document.getElementById("validate").innerText = "Valider la réponse";
        Q1();
    };
}

function get_input(){
    return document.getElementById("input").value;
}

function set_question(ques){
    document.getElementById("question").innerText = ques;
}

function flush_question(){
    document.getElementById("input").value = "";
}

function change_img(url){
    document.getElementById("image").src = url;
}

function Q1(){
    question = 1;
    flush_question();
    change_img("https://i.pinimg.com/564x/c2/34/61/c234617291173ba4e3aa5bbedb2d71d2.jpg"); 
    set_question("Quel est le nom de cet animal ?");
};

function Q2(){
    question = 2;
    flush_question();
    change_img("stare.png"); 
    set_question("De quelle personne provient ce regard ?");
};

function Q3(){
    question = 3;
    flush_question();
    set_question("Dans quelle région nous installerons nous ? (enfin si tu le souhaites)");
    change_img("https://i.pinimg.com/564x/29/bc/86/29bc865e551d880cbb6aa465d0f3a2df.jpg");
};

function Q4(){
    question = 4;
    flush_question();
    change_img("");
    set_question("Je t'aime Lisa. Joyeuse Saint-Valentin <3");
    document.getElementById("input").style.display = "none";
    document.getElementById("validate").innerText = "Nous dans 2 semaines";
};

function Validate(){
    if (question == 0){
        if (get_input() === "0708"){
            Q1();
            return
        }
        else{
            set_question("Oups c'est pas bon :')");
            return
        };
    };
    if (question == 1){
        if (get_input().toUpperCase() === "KEVIN"){
            alert("Bien joué ! Keviiiiiiiiiiiiiiiiiin");
            Q2();
        }
        else{
            set_question("C'est pas bon badabruh")
            return
        }
    };
    if (question == 2){
        if (get_input().toUpperCase() === "RODRIGUE"){
            alert("il manque un r >:3 (faut virer le u sinon ça fait moche)");
        }
        if (get_input().toUpperCase() === "RODRIGRE"){
            alert("c'est la bonne réponse ! *solo de guitare espagnole*");
            Q3();
        }
        if (get_input() === ""){
            return
        }
        else{
            set_question("Eeeeeeeeeetttt bah non c pas bon :>")
            return
        }
    };
    if (question == 3){
        if (get_input() === ""){
            return
        }
        if (get_input().toUpperCase().indexOf("JURA") >= 0){
            alert("happi happi happi <3");
            Q4();
            return
        }
        else{
            set_question("On peut changer de destination si tu veux mais je veux vivre en châlet :(")
            return
        }
    };
    if (question == 4){
        window.open("https://www.youtube.com/watch?v=qWdEvg3oMlg");
    }
}