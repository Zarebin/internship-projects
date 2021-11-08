// render cards
import {icons} from "./settings";

export const renderUI = (game: any) => {

    game.wrapper = document.querySelector('.pair-matching');
    game.dom = document.querySelector('.pair-matching .game');

    game.dom.innerHTML = '';

    game.dom.classList.value = `game size${game.size}`;
    
    for (let icon of game.icons) {
        game.dom.innerHTML += `
            <div class="card" data-name=${icon}>
                <div class="front"></div>
                <div class="back">${icons[game.iconTheme][icon]}</div>
            </div>`;
    }

    setEvents(game);
}

const setEvents = (game: any) => {

    let gameCards: any = game.dom.querySelectorAll('.card');

    for (let card of gameCards) {
        card.onclick = () => {

            if (card.classList.contains('flipped')) return;

            game.temp.push(card.getAttribute('data-name'));
            card.classList.add('flipped');

            if (game.temp.length >= 2) {
                setTimeout(() => {
                    // check for match
                    if (game.temp[0] === game.temp[1]) {
                        game.dom.querySelectorAll('.flipped').forEach(
                            (card: Element) => {
                                card.classList.add('solved');
                            }
                        );
                    }
                    // flip cards again
                    game.dom.querySelectorAll('.flipped').forEach(
                        (card: Element) => card.classList.remove('flipped')
                    );
                    game.temp = [];

                    // check victory
                    checkVictory(game);
                }, 500);

            }
        }
    }
}

const checkVictory = (game: any) => {
    if (game.dom.querySelectorAll('.card:not(.solved)').length == 0) {
        alert('Victory!');
    }
}