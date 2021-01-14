export function debounce(func, delay) {
    let timer
    return function () {
        if (timer) clearTimeout(timer)
        setTimeout(() => {
            func && func.apply(this, arguments)
        }, delay);
    }
}