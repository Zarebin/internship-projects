import '../sass/style.scss';
import {fillIcons, setSettingEvents} from "./settings";
import { renderUI } from "./ui";

const game = {
    score: {
        current: 0,
        best: 0
    },
    size: 6,
    iconTheme: 'christmas',
    icons: <any>[],
    temp: <any>[],
    wrapper: <Element> null,
    dom: <Element> null
}

window.onload = () => {
    fillIcons(game);
    renderUI(game);
    setSettingEvents(game);
}