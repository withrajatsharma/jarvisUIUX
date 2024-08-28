const chats  = document.querySelector('.chat');

const input = document.querySelector('input');

const btn = document.querySelector('.send-button');




btn.onclick = () =>{


    if(input.value==""){
        return;
    }else{
        // const p = document.createElement('p');
        const div = document.createElement('div');
        // const divicon = document.createElement('div');
        div.className='message user';

        div.innerHTML = ` <p class="p1">${input.value}</p>
               
                <div class="icon user-icon">&#x1F464;</div>`;


        // p.innerHTML = `<span id="user">Kaushik: </span> ${input.value}`;
        chats.appendChild(div);
        input.value = "";
    }

  

}