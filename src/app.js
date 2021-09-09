var btnTranslate=document.querySelector("#btn-translate")
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output");

// outputDiv.innerText="Chirag Kumar"
var serverURL="https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    console.log(error);
    alert("Sorry you only use this translation for 5 times in an hour.")
}
// console.log(txtInput)
function clickEventHandler(){
    console.log('clicked')
    console.log("input",txtInput.value)
    var inputText=txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated;
        outputDiv.innerHTML=translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickEventHandler);

