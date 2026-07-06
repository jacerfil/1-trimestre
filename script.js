document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de reação do blog
    const likeButtons = document.querySelectorAll('.btn-like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra o elemento do contador de texto dentro do botão clicado
            const countElement = button.querySelector('.count');
            
            // Pega o valor atual, transforma em número e soma +1
            let currentCount = parseInt(countElement.textContent, 10);
            currentCount++;
            
            // Atualiza o texto na tela
            countElement.textContent = currentCount;

            // Efeito visual opcional de clique
            button.style.borderColor = '#3182ce';
            setTimeout(() => {
                button.style.borderColor = '#cbd5e0';
            }, 200);
        });
    });
});