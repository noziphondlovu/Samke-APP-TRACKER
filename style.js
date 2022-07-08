const input = document.querySelector("#add");
const  between = document.querySelector("#btn");
const list = document.querySelector("#list");
var element = document.getElementsByTagName('li');


between.onclick = function(){
    
    var text = input.value;
    if(text ==''){
        alert('you write something');
    }else{
        li = document.createElement('li');
    li.innerHTML = text;
    list.insertBefore(li,list.childNodes[0]);
    input.value = ''
    }
    
}


list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
}