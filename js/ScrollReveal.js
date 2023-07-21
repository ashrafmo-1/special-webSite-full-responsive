const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.brandName`, { origin: 'left', interval: 100, delay: 100, distance: '10px' })
sr.reveal(`nav`, { origin: 'right', interval: 100, delay: 100, distance: '10px' })
sr.reveal(`.landing h1`)
sr.reveal(`.landing .content p`, { origin: 'top', interval: 100, delay: 100, distance: '10px' })

sr.reveal(`.AboutUs h1`)
sr.reveal(`.AboutUs .text-content p`, { origin: 'top', interval: 100, delay: 100, distance: '10px' })

sr.reveal(`.AboutUs .image img`, { origin: 'right', interval: 100, delay: 200, distance: '60px' })