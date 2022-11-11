let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FF8979"

let item = ""

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")

btn1.onclick = () => {
    alert("морковь")
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали морковь!")
        item = "морковь"
        tg.MainButton.show()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали картофель!")
        item = "картофель"
        tg.MainButton.show()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали огурец!")
        item = "огурец"
        tg.MainButton.show()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали помидор!")
        item = "помидор"
        tg.MainButton.show()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item)
})
