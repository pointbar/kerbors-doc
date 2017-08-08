const displayImg = (id) => {
    const img = document.querySelector('img')
    img.src = `faceblind/${id}.jpg`
}

const chooseImg = () => {
    const id = Math.round(Math.random() * 75) + 1
    displayImg(id)
}

document.addEventListener("DOMContentLoaded", event => {
    const button = document.querySelector('button')
    button.onclick = chooseImg
})