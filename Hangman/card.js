const flashCardApp = new Vue({
    el: '#flashCardApp',
    data: {
        cards: [{
            id: 1,
            frontText: 'Абзац - это ... .',
            backText: 'отступ в начале строки',
            colorClass: 'red',
            flipped: false
        },
            {
                id: 2,
                frontText: 'Минимальная единица текста:',
                backText: 'предложение',
                colorClass: 'yellow',
                flipped: false
            },
            {
                id: 3,
                frontText: 'Виды связи предложений в тексте:',
                backText: 'цепная и параллельная',
                colorClass: 'blue',
                flipped: false
            }]
    },

    methods: {
        flipCard: function(card) {
            card.flipped = !card.flipped;
        }
    }
});