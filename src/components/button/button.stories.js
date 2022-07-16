import { AlwinJS } from "../../alwinjs"
import { BasicButton } from "./button"

export default {
    title: 'MyWebsite/Button',
    argTypes: {
        amount: {control: {
            type: "range",
            min: 1,
            max: 10
        }},
        margin: {control: {
            type: "range",
            min: 1
        }},
        minWidth: {
        control: {
            type: "range",
            min: 50,
            max: 500
        }}
    },
}

const Template = (args) => {
    let container = document.createElement("div")
    if(args.amount<0) { return container }
    for (let index = 0; index < args.amount; index++) {
        AlwinJS.appendNode(BasicButton, container)
    }
    container.childNodes.forEach(elem => {
        elem.style.margin = args.margin + "px"
        elem.style.minWidth = args.minWidth + "px"
    })
    return container
}

export const Primary = Template.bind({})
Primary.args = {
    amount: 1,
    margin: 1,
    minWidth: 50
}
