const Node = require('./Node')
const vals = [0, 1, 2, 3, 4, 5, 6]
const list = new Node(vals.shift())
let p = list
vals.forEach(val => {
    p.next = new Node(val)
    p = p.next
})

module.exports = list