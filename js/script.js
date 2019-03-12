/*анимация текста*/
var texts = [
    'ТВОРЧЕСКОЕ ПРОСТРАНСТВО',
    'БЕЗГРАНИЧНЫЕ ВОЗМОЖНОСТИ',
    'БЕЗУПРЕЧНОЕ ИСПОЛНЕНИЕ'
];

var currentTextId = texts.length - 1;

function getNextText(){

    currentTextId++;
    if(currentTextId == texts.length) {
        currentTextId = 0;
    }
return
texts[currentTextId];
    
}
var textEl = document.getElementById('text-animal');

textEl.innerHTML = 
getNextText ();
setInterval (function() {
    textEl.innerHTML = 
    getNextText();
}, 5000);




$(document).ready(function() {
	$("#content div").hide(); // Скрываем содержание
	$("#tabs li:first").attr("id","current"); // Активируем первую закладку
	$("#content div:first").fadeIn(); // Выводим содержание

    $('#tabs a').click(function(e) {
        e.preventDefault();
        $("#content div").hide(); //Скрыть все сожержание
        $("#tabs li").attr("id",""); //Сброс ID
        $(this).parent().attr("id","current"); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });
})();