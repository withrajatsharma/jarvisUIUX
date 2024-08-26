const chats  = document.querySelector('.chats');

const input = document.querySelector('#askAi');

const btn = document.querySelector('button');




btn.onclick = () =>{

    if(input.value==""){
        return;
    }else{
        const p = document.createElement('p');
        p.innerHTML = `<span id="user">Kaushik: </span> ${input.value}`;
        chats.appendChild(p);
        input.value = "";
    }
  

}