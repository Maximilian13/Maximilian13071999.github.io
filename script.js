let tg = window.Telegram.WebApp

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FF8979"

let items = {
    carrot: 0,
    potato: 0,
    cucumber: 0,
    tomato: 0
}
let name = ""
let phone = ""
let email = ""

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")

let usercard = document.querySelector("#usercard")
let username = document.querySelector("#user-name")
let useremail = document.querySelector("#user-email")
let userphone = document.querySelector("#user-phone")

function create_li(text) {
    let li = document.createElement("li")
    li.innerHTML = text
    usercard.appendChild(li)
}

function update_orders() {
    usercard.innerHTML = "Ваши заказы:"
    if (name != "") {
        create_li("Имя: " + name)
    }
    if (phone != "") {
        create_li("Телефон: " + phone)
    }
    if (email != "") {
        create_li("Email: " + email)
    }
    for (let item in items) {
        if (items[item] != 0) {
            create_li(item + ": " + items[item])
        }
    }
}

username.onchange = () => {
    name = username.value
}

useremail.onchange = () => {
    email = useremail.value
}

userphone.onchange = () => {
    phone = userphone.value
}

btn1.onclick = () => {
    items['carrot'] += 1
    update_orders()
}

btn2.onclick = () => {
    items['potato'] += 1
    update_orders()
}

btn3.onclick = () => {
    items['cucumber'] += 1
    update_orders()
}

btn4.onclick = () => {
    items['tomato'] += 1
    update_orders()
}

let submit = document.querySelector("#submit")

submit.onclick = () => {
    tg.MainButton.setText("Нажмите на кнопку для оформления заказа!")
    tg.MainButton.show()
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData([name, phone, email, items])
})