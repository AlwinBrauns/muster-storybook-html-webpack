import { AlwinJS } from "../../alwinjs"
import { Card } from "./card"

export default {
    title: 'MyWebsite/Card',
    argTypes: {
    },
}

const Template = (args) => {
    let container = document.createElement("div")
    AlwinJS.appendNode(Card, container)
    return container
}

export const Basic = Template.bind({})
Basic.args = {
    
}
