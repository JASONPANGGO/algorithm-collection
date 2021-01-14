module.exports = {
    // 竖式运算
    multi1(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) return ''
        num1 = num1.toString()
        num2 = num2.toString()
        let len1 = num1.length
        let len2 = num2.length
        let res = []
        for (let i = len1 - 1; i >= 0; i--) {
            for (let j = len2 - 1; j >= 0; j--) {
                let index1 = i + j
                let index2 = index1 + 1
                let mul = num1[i] * num2[j] + (res[index2] || 0)
                res[index1] = Math.floor(mul / 10) + (res[index1] || 0)
                res[index2] = mul % 10
            }
        }
        return res.join('').replace(/^0+/, '')
    }
}


