import '@webcomponents/webcomponentsjs'
import '@material/mwc-select'
import '@material/mwc-list/mwc-list-item';
import {renderUI} from './ui';


function importAll(context: any) {
    let items: any = {};
    context.keys().map((item: any) => {
        let key = item.replace('./', '').replace(/\..+$/, '');
        items[key] = context(item)
    });
    return items;
}

export const icons: any = {
    christmas: importAll(require.context('../img/christmas/', false, /\.svg$/)),
    fruits: importAll(require.context('../img/fruits/', false, /\.svg$/)),
}

const shuffle = (array: any) => {
    array.sort(() => Math.random() - 0.5);
}

export const fillIcons = (game: any) => {
    game.icons = Object.keys(icons[game.iconTheme]);
    let iconsCount = (game.size * game.size) / 2;

    if (game.icons.length < iconsCount) {
        game.icons = [...game.icons, ...game.icons];
    }

    game.icons = game.icons.slice(0, iconsCount);
    game.icons = [...game.icons, ...game.icons]
    shuffle(game.icons)
}

export function setSettingEvents(game: any) {
    game.wrapper.querySelector('.setting-size').onclick = function (e: any) {
        game.size = e.target.value;
        fillIcons(game);
        renderUI(game);
    }
    game.wrapper.querySelector('.setting-theme').onclick = function (e: any) {
        game.iconTheme = e.target.value;
        fillIcons(game);
        renderUI(game);
    }
}