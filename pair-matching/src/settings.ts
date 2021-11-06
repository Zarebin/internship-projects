const icons: any = {
    christmass: [
        'balloons.svg', 'bell.svg', 'candle.svg', 'champagne.svg', 'chicken.svg', 'christmas-hat.svg', 'christmas-ornament.svg', 'christmas-socks.svg', 'christmas-sugar.svg', 'christmas-tree.svg', 'chronometer.svg', 'confetti.svg', 'december.svg', 'fireplace.svg', 'fireworks.svg', 'mask.svg', 'ornament.svg', 'snow-flake.svg', 'snow-globe.svg', 'snow-man.svg', 'stars.svg'
    ],
    fruits: [
        'apple-and-grapes.svg', 'apple.svg', 'apricot.svg', 'avocado.svg', 'banana-and-apple.svg', 'banana-and-orange.svg', 'banana.svg', 'blue-berry.svg', 'cherry.svg', 'dragon-fruit.svg', 'durian.svg', 'fig.svg', 'fruits.svg', 'goji-berry.svg', 'grapes.svg', 'kiwi.svg', 'mango-and-pineapple.svg', 'mango.svg', 'melon.svg', 'orange.svg', 'passion.svg', 'pear.svg', 'pineapple-and-banana.svg', 'pineapple-and-watermelon.svg', 'pineapple.svg', 'strawberry.svg', 'watermelon.svg'
    ]
}

const shuffle = (array: any) => {
    array.sort(() => Math.random() - 0.5);
}

export const fillIcons = (game: any) => {
    game.icons = icons[game.iconTheme];
    let iconsCount = (game.size * game.size) / 2;

    if(game.icons.length < iconsCount) {
        game.icons = [...game.icons, ...game.icons];
    }

    game.icons = game.icons.slice(0, iconsCount);
    game.icons = [...game.icons, ...game.icons]
    shuffle(game.icons)
}