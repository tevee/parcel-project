import codeImgUrl from "./media/code.jpg"
import anime from "../node_modules/animejs/lib/anime.es.js"

const imgEl = document.createElement('img')
imgEl.src = codeImgUrl;
document.body.append(imgEl)

anime({
    targets: imgEl,
    keyframes: [
        {translateX: '-100vw', easing: 'easeInOutQuad'},
        {translateX: '20vw', easing: 'easeInOutQuad'}
    ]
})