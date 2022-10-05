function Translate(word,language){//translate objesini oluşturuyoruz
    this.apiKey="your_api_key";
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
