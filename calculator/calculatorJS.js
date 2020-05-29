function insertInHistory(num){
    document.getElementById('previousTextId').innerText=document.getElementById('previousTextId').innerText+num;
}
function clearValues(){
    document.getElementById('previousTextId').innerText="";
    document.getElementById('resultTextId').innerText="";
}
function equal(){
    var value=document.getElementById('previousTextId').innerText;
    var resultValue=eval(value);
    console.log(resultValue);
    
    document.getElementById('resultTextId').innerText=resultValue;
}