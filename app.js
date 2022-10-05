eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)

    //change event
    document.getElementById("language").onchange=function(){
    //select change
    //arayüz işlemleri
    console.log("Event");
    ui.changeUI();
    }
}
const translate =new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui=new UI;
function translateWord(e){
    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value)
    translate.translateWord(function(err,response){

        if(err){
            //response
            console.log(err);
        }else{
            ui.displayTranslate(response);
        }
    });
    
    

    e.preventDefault();
}