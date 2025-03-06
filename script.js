let output = document.querySelector(".output");
let generate_btn = document.getElementById('generate-btn');
let copy_btn = document.getElementById('copybtn');
const length_8 = document.getElementById('length-8');
const length_12 = document.getElementById('length-12');
const length_16 = document.getElementById('length-16');

function generaterandomnstring(length){
    let str1 = "abcdefghijklmnopqrstuvwxyz";
    let str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str3 = "1234567890";
    let str4 = "!@#$%^&*";
    
    let mergedarr = (str1 + str2 + str3 + str4).split("");
    for(let i = mergedarr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random()* (i + 1));
        [mergedarr[i], mergedarr[j]] = [mergedarr[j], mergedarr[i]];
    }
    
    return mergedarr.slice(0,length).join("");
}

function generate_password(){
    let length = 8;

    if(length_8.checked){
        length = 8;    
    }
    else if(length_12.checked){
        length = 12;
    }
    else if(length_16.checked){
        length = 16
    }

    let password = generaterandomnstring(length);
    
    output.textContent = password;
    output.style.fontSize = "25px";
}

generate_btn.addEventListener("click", ()=>{
    generate_password();
});

copy_btn.addEventListener("click", async ()=>{
    if(output.textContent.trim() != ""){
        try{
            await navigator.clipboard.writeText(output.textContent);
            alert("Password copied to clipboard");
        }
        catch(error){
            console.log("Copy failed", error);
            alert("Password not copied!");
        }
    }
    else{
        alert("No password generated");
    }
});