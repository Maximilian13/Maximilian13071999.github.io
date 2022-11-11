let tg = window.Telegram.WebApp

tg.expand()

let btn = document.querySelector("#click")
btn.onclick = () => {
    alert("Нажатие")
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали кота!")
        tg.MainButton.show()
    }
}