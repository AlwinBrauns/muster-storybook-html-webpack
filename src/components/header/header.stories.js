import { AlwinJS } from "../../alwinjs"
import { Header } from "./header"

export default {
    title: 'MyWebsite/Header',
    argTypes: {
    },
}

const Template = (args) => {
    let container = document.createElement("div")
    AlwinJS.appendNode(Header, container)
    return container
}

export const Basic = Template.bind({})
Basic.args = {
    
}