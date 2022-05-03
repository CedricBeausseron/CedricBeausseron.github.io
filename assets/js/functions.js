function getHtml(htmlType, htmlName){
    fetch("/nophp/cedricbeausseron.github.io/"+htmlType+"/"+htmlName+".html")
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