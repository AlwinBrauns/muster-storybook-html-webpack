import bilda from './assests/bilda.png'
import bildb from './assests/bildb.png'

const listOfPictures = {bilda, bildb}
export default {
    title: "MyWebsite/Pictures",
    argTypes: {
        image: {
            options: Object.keys(listOfPictures),
            mapping: {...listOfPictures},
            control: {
                type: 'select',
            }
        }
    }
}

const Template = (args) => {
    const imgElement = document.createElement("img")
    imgElement.src = args.image
    imgElement.width = "300"
    return imgElement
}

export const Images = Template.bind({})
Images.args = {
    image: bilda
}