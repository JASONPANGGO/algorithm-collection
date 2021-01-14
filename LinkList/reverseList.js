const list = require('./List')

function reverseList(head) {
    let currNode = null
    let headNode = head
    while (head && head.next) {
        currNode = head.next
        head.next = currNode.next
        currNode.next = headNode
        headNode = currNode
    }
    return headNode
}


console.log(reverseList(list));