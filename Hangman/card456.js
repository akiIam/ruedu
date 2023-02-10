const flashCardApp = new Vue({
    el: '#flashCardApp',
    data: {
        cards: [{
            id: 1,
            frontText: 'Форма речи, которая характеризуется сменой высказываний двух лиц - это:',
            backText: 'диалог',
            colorClass: 'red',
            flipped: false
        },
            {
                id: 2,
                frontText: 'Речь одного из участников диалога называется:',
                backText: 'репликой',
                colorClass: 'yellow',
                flipped: false
            },
            {
                id: 3,
                frontText: 'К элементам библиографического описания НЕ относится:',
                backText: 'Содержание',
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