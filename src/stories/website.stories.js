import { AlwinJS } from "../alwinjs"
import { BasicButton } from "../components/button/button"
import { Card } from "../components/card/card"
import { Header } from "../components/header/header"
import '../index.scss'

export default {
    title: "MyWebsite/Website"
}

export const Basic = (args) => {
    const main = document.createElement("main")
    AlwinJS.appendNode(Header, main)
    if(args.amountOfCards<=0) {
        const msg = document.createElement("span")
        msg.innerText = "Set the amount of Cards!"
        main.appendChild(msg)
        return main
    }
    for(let i = 0; i< args.amountOfCards; i++)
        AlwinJS.appendNode(Card, main)
    return main
}

Basic.args = {
    amountOfCards: 1
}