function show(content){
    console.log('hello')
    window.document.getElementById('app').innerText = 'Hello ' + content;
}
module.exports = show;