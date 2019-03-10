class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame);
        this.spanWallet = document.querySelector('.panel__span--wallet');
        this.boards = document.querySelectorAll('.game__color');
        this.inputBid = document.getElementById('bid');


        this.spanResult = document.querySelector('.score__span--result');
        this.spanGames = document.querySelector('.score__span--number');
        this.spanWins = document.querySelector('.score__span--win');
        this.spanLosses = document.querySelector('.score__span--loss');

        this.render();
    }

    render(money = 100) {

        this.spanWallet.textContent = money;




    }

    startGame() {

    }
}