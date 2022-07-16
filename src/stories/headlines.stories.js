const H_Options = ["h1","h2","h3","h4"]

export default {
    title: "MyWebsite/Headlines",
    argTypes: {
        headlineSize: {
            options: H_Options,
            control: {
                type: 'select',
            }
        }
    }
}
const H_Template = (args) => {
    return `<${args.headlineSize}>${args.headline?args.headline:"Headline"}</${args.headlineSize}>`
}
export const Headlines = H_Template.bind({})
Headlines.args = {
    headline: "",
    headlineSize: "h1"
}