const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', function(){
    if(input.value == ''){
        const h3 = document.getElementById('h3');
        h3.textContent = 'Type something in the text field!'
    }else{
        const list = document.getElementById('list');
        const newElement = document.createElement('li');

        //Limpa a mensagem de erro
        h3.textContent = ''

        //Conteúdo do item da lista
        newElement.innerHTML = `${input.value} <span>\u00d7</span>`;

        //Adicionar item a lista
        list.appendChild(newElement);

        //Checar item da lista
        newElement.addEventListener('click', function(){
            newElement.classList.toggle('checked')
        })

        //Remover item
        const span = newElement.querySelector('span');
        span.addEventListener('click', function(){
            newElement.remove();
        })
        
    }

    //Limpa o input
    input.value = ''
})