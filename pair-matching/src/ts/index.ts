import '../sass/style.scss';
import {fillIcons, setSettingEvents} from "./settings";
import { renderUI } from "./ui";

// Game global variable
const game = {
    score: {
        current: 0,
        best: localStorage.getItem('bestScore')
    },
    size: 6,
    iconTheme: 'christmas',
    icons: <any>[],
    temp: <any>[],
    timer: <number> null,
    dom: {
        wrapper: <Element> null,
        grid: <Element> null,
        time: <Element> null,
        bestScore: <Element> null,
    },
}

// Load game
window.onload = () => {
    fillIcons(game);
    renderUI(game);
    setSettingEvents(game);
}