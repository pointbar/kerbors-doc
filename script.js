const changeImage = () => {
    const i = Math.floor(Math.random() * 75) + 1
    document.querySelector('img').src = `faceblind/${i}.jpg`
}
setInterval(changeImage, 100)