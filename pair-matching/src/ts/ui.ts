// render cards
import {icons} from "./settings";

export const renderUI = (game: any) => {

    // Map dom elements
    game.dom.wrapper = document.querySelector('.pair-matching');
    game.dom.grid = game.dom.wrapper.querySelector('.game');
    game.dom.time = game.dom.wrapper.querySelector('.time .val');
    game.dom.bestScore = game.dom.wrapper.querySelector('.time .best');

    // Reset values
    game.dom.grid.innerHTML = '';
    game.score.current = 0;
    clearInterval(game.timer);
    game.timer = null;
    game.dom.time.innerHTML = '-';
    game.dom.bestScore.innerHTML = (game.score.best ? parseInt(game.score.best):'-').toLocaleString('fa-IR');

    // Set grid size
    game.dom.grid.classList.value = `game size${game.size}`;

    // Render grid icons
    for (let icon of game.icons) {
        game.dom.grid.innerHTML += `
            <div class="card" data-name=${icon}>
                <div class="front"></div>
                <div class="back">${icons[game.iconTheme][icon]}</div>
            </div>`;
    }

    setEvents(game);
}

const setEvents = (game: any) => {

    // Select all cards
    let gameCards: any = game.dom.grid.querySelectorAll('.card');

    // Loop over cards and set events
    for (let card of gameCards) {
        card.onclick = () => {

            // Ignore invalid clicks
            if (card.classList.contains('flipped')) return;
            if (game.temp.length === 2) return;

            // Initialize the timer of not already
            if (game.timer === null) {
                game.timer = setInterval(() => {
                    game.score.current += 1;
                    game.dom.time.innerHTML = game.score.current.toLocaleString('fa-IR');
                }, 1000);
            }

            // Flip the cards
            game.temp.push(card.getAttribute('data-name'));
            card.classList.add('flipped');

            // Check if user flipped two cards
            if (game.temp.length === 2) {
                setTimeout(() => {
                    // check if flipped cards do match
                    if (game.temp[0] === game.temp[1]) {
                        game.dom.grid.querySelectorAll('.flipped').forEach(
                            (card: Element) => {
                                card.classList.add('solved');
                            }
                        );
                    }
                    // flip cards back again
                    game.dom.grid.querySelectorAll('.flipped').forEach(
                        (card: Element) => card.classList.remove('flipped')
                    );
                    game.temp = [];

                    // check for victory
                    checkVictory(game);
                }, 500);

            }
        }
    }
}

const checkVictory = (game: any) => {
    // Check if there is any cards not solved yet
    if (game.dom.grid.querySelector('.card:not(.solved)') === null) {
        game.dom.grid.innerHTML += `<div class="overlay">
            <span>تبریک! شما برنده شدید</span>
            <mwc-button raised class="replay">بازی دوباره</mwc-button>
        </div>`;

        game.dom.grid.querySelector('.replay').onclick = function () {
            renderUI(game);
        }
        clearInterval(game.timer);
        // Check for new record
        if(game.score.best === null || game.score.current < game.score.best) {
            game.score.best = game.score.current;
            localStorage.setItem('bestScore', game.score.best);
        }
    }
}