let rootPath = ""
if(! window.location.href.includes("https://cedricbeausseron.github.io")) {
    rootPath = "nophp/cedricbeausseron.github.io/"
}

function experiences(){
    let progressBars = document.getElementsByClassName("progress-bar");
    for (let item of progressBars) {
        console.log(item);
        item.style.width = "70%";
    }
}

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

function getHtml(htmlType, htmlName){
    fetch("/"+rootPath+htmlType+"/"+htmlName+".html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(htmlName).innerHTML = data;
        
        executeFunctionByName(htmlName, window, "truc")
    });
}
function getTemplate(htmlName){
    getHtml("template-parts", htmlName)
}
function getPage(htmlName){
    getHtml("pages", htmlName)
}