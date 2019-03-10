class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame);
        this.spanWallet = document.querySelector('.panel__span--wallet');
        this.boards = [...document.querySelectorAll('.game__color')];
        this.inputBid = document.getElementById('bid');


        this.spanResult = document.querySelector('.score__span--result');
        this.spanGames = document.querySelector('.score__span--number');
        this.spanWins = document.querySelector('.score__span--win');
        this.spanLosses = document.querySelector('.score__span--loss');

        this.render();
    }

    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        })

        this.spanWallet.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}`
        } else if (!result && result != "") {
            result = `Przegrałeś ${bid}`;
        }


        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0]
        this.spanWins.textContent = stats[0]
        this.spanLosses.textContent = stats[0]




    }

    startGame() {

    }
}