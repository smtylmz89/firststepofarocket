function Translate(word,language){//translate objesini oluşturuyoruz
    this.apiKey="trnsl.1.1.20190827T125251Z.e32389ed4aae8642.3d4b1e4efbd85622434a4b8f7a6a71af652ccd3e";
    this.word=word;
    this.language=language;

    this.xhr=new XMLHttpRequest();//xhr nesnesi
}


Translate.prototype.translateWord=function(callback){
//Ajax İşlemleri
const endpoint=`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`;
this.xhr.open("GET",endpoint);
this.xhr.onload=()=>{
    if(this.xhr.status===200){
        const  json=JSON.parse(this.xhr.responseText);
        const text=json.text[0];
        callback(null,text);

        // console.log(this.xhr.responseText).text[0];
    }else{
        callback("Bir Hata Oluştu",null);
    }

}


    this.xhr.send()};
    Translate.prototype.changeParameters=function(newWord,newLanguage){
        this.word=newWord;
        this.language=newLanguage;


    }