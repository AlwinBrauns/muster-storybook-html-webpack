const main = document.body.getElementsByTagName("main")[0]

class _AlwinJS {
    createComponent(html){
        let node = document.createElement('template')
        node.innerHTML = html
        return node
    }
    appendNode(node, to_child){
        const importedNode = document.importNode(node, true)
        return to_child.appendChild(importedNode.content)
    }
    renderComponent(node){
        const importedNode = document.importNode(node, true)
        return main.appendChild(importedNode.content)
    }
}

export const AlwinJS = new _AlwinJS()