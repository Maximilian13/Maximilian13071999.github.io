let tg = window.Telegram.WebApp
tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FF8979"

result = ""

let player = document.querySelector("#player")
let score_label = document.querySelector("#score")
let score = 0

player.onclick = () => {
    score += 1
    score_label.innerHTML = "Score: " + score
    win_check()
}

function win_check() {
    if (score > 3) {
        bomb.style.display = "none"
        player.style.display = "none"
        document.querySelector("body").style.background = "url(https://www.block-chain24.com/sites/default/files/styles/full_bg/public/img/maxresdefault_19.jpg?itok=fxGktJqY)"
        tg.MainButton.setText("Вы выиграли!")
        result = "win"
        tg.MainButton.show()
        clearInterval(timer)
    }
}

let bomb = document.querySelector("#bomb")

bomb.onclick = () => {
    score -= 1
    score_label.innerHTML = "Score: " + score
    lose_check()
}

function lose_check() {
    if (score < -3) {
        bomb.style.display = "none"
        player.style.display = "none"
        document.querySelector("body").style.background = "url(https://pluspng.com/img-png/to-lose-a-game-png-s2e16-you-lose-png-1920.png)"
        tg.MainButton.setText("Вы проиграли!")
        result = "lose"
        tg.MainButton.show()
        clearInterval(timer)
    }
}

let timer = setInterval(function() {
    let chance = Math.random()
    if (chance > 0.5) {
        player.style.display = "none"
        bomb.style.display = "block"
    } else {
        player.style.display = "block"
        bomb.style.display = "none"
    }
    player.style.top = Math.random() * 500 + "px"
    player.style.left = Math.random() * 290 + "px"
    bomb.style.top = Math.random() * 500 + "px"
    bomb.style.left = Math.random() * 290 + "px"
}, 1000)

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(result)
})