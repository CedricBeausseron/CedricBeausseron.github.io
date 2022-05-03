//usefull ?
console.log(window.location.href)
let rootPath = ""
if(! window.location.href.includes("https://cedricbeausseron.github.io")) {
    rootPath = "nophp/cedricbeausseron.github.io/"
}
//end usefull ?

function getHtml(htmlType, htmlName){
    console.log(rootPath)
    fetch("/"+rootPath+htmlType+"/"+htmlName+".html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(htmlName).innerHTML = data;
    });
}
function getTemplate(htmlName){
    getHtml("template-parts", htmlName)
}

function getPage(htmlName){
    getHtml("pages", htmlName)
}