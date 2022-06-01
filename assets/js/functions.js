let rootPath = ""
if(! window.location.href.includes("https://cedricbeausseron.github.io")) {
    rootPath = "nophp/cedricbeausseron.github.io/"
}

//fonctions de templates
function experiences(){
    setTimeout(() => { 
        let progressBars = document.getElementsByClassName("progress-bar");
        for (let item of progressBars) {
            item.style.width = item.getAttribute("aria-valuenow")+"%";
            
            // console.log(item.closest('.progress').style.visibility)
            // item.closest('.progress').style.visibility = "visible;"
        }
     },0 )
}

//appeler une fonction par son nom en string
function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
}
    if(context[func]){
        return context[func].apply(context, args);
    }
}

//lire les script ajouté via innerHTML
var setInnerHTML = function(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}
function getHtml(htmlType, htmlName){
    fetch("/"+rootPath+htmlType+"/"+htmlName+".html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        setInnerHTML(document.querySelector(htmlName), data);        
        executeFunctionByName(htmlName, window, "truc")
    });
}
function getTemplate(htmlName){
    getHtml("template-parts", htmlName)
}
function getPage(htmlName){
    getHtml("pages", htmlName)
}