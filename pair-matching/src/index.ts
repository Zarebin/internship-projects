import './style.scss'
import { fillIcons} from "./settings";
import { renderUI } from "./ui";

const game = {
    score: {
        current: 0,
        best: 0
    },
    size: 6,
    iconTheme: 'christmass',
    icons: <any>[],
    temp: <any>[],
    dom: <Element> null
}

window.onload = () => {
    fillIcons(game);
    renderUI(game);
}