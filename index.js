var elementosDuvidas = document.querySelectorAll('.duvida')
//nessa linha estamanho criando uma vareavel e estamos selecionando a propriedade .duvida

elementosDuvidas.forEach(function(duvida) {
    duvida.addEventListener('click',function(){
        duvida.classList.toggle('ativa')
    })
    
});
//nessa funcao estamos chamando o elemento duvida com o click ele abre com uma fundo