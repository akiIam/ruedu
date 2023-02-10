const flashCardApp = new Vue({
    el: '#flashCardApp',
    data: {
        cards: [{
            id: 1,
            frontText: 'Объединенная смысловой и грамматической связью последовательность речевых единиц- это:',
            backText: 'текст',
            colorClass: 'red',
            flipped: false
        },
            {
                id: 2,
                frontText: 'Связь, при которой каждое последующее предложение в сложном синтаксическом целом соединено с предыдущим, называется:',
                backText: 'цепной',
                colorClass: 'yellow',
                flipped: false
            },
            {
                id: 3,
                frontText: 'Сложное синтаксическое целое состоит из ... .',
                backText: 'из двух и более предложений',
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