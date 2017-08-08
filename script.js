const displayImg = (id) => {
    const img = document.querySelector('img')
    img.src = `faceblind/${id}.jpg`
}

const init = () => {
    setInterval(() => {
        const id = Math.round(Math.random() * 75) + 1
        displayImg(id)
    }, 1000)
}