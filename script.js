const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')


// ----------------------------draw squer-------------------------------
// ------------------------------------------------------------------
// const squers = [
//     { x: 0, y: 0, w: 50, h: 50, color: 'red', name: 'hero' },
//     { x: 0, y: 0, w: 100, h: 100, color: 'blue' },
//     { x: 80, y: 120, w: 100, h: 100, color: 'black' },
//     { x: 180, y: 320, w: 330, h: 100, color: 'lime' },
//     { x: 300, y: 220, w: 190, h: 20, color: 'brown' },
// ]

// function update() {
//     requestAnimationFrame(update)

//     squers.forEach(({ x, y, w, h, color }, i) => {
//         colisionSquer(x, y, w, h, color)
//     })
// }
// update()

// class Draw {
//     constructor(x, y, w, h, color, num) {
//         x = this.x;
//         y = this.y;
//         w = this.w;
//         h = this.h;
//         color = this.color;
//         num = 0;
//     };
//     draw(context) {
//         context.beginPath()
//         context.fillStyle = this.color
//         context.fillRect(this.x, this.y, this.w, this.h)
//         context.closePath()

//         console.log(this.x)
//     };
//     update() {
//         requestAnimationFrame((t) => {
//             this.update()
//         })

//         // this.draw(context)
//     };
//     hero(context, x, y) {
//         context.clearRect(0, 0, canvas.width, canvas.height)
//         context.beginPath()
//         context.fillRect(x, y, 100, 100)
//         context.closePath()
//         // console.log(x, y)
//     };
// }

// const draw = new Draw()
// draw.draw(ctx)

// canvas.addEventListener('mousemove', ({ x, y }) => {
//     draw.hero(ctx, x, y)
// })



// const objects = [
//     { x: 500, y: 80, w: 50, h: 50, color: 'red', name: 'hero' },
//     { x: 0, y: 0, w: 100, h: 100, color: 'blue' },
//     // { x: 80, y: 120, w: 100, h: 100, color: 'black' },
//     // { x: 180, y: 320, w: 330, h: 100, color: 'lime' },
//     // { x: 300, y: 220, w: 190, h: 20, color: 'brown' },
// ]

// function draw(x, y, w, h) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.beginPath()
//     // ctx.rect(x, y, w, h);
//     ctx.arc(x + w, y + w, 50, 0, Math.PI * 2)
//     ctx.stroke()
//     ctx.closePath()
// }

// let x = 0, dx = 0;
// let y = 0, dy = 0;
// const step = 10;
// (function update() {
//     requestAnimationFrame(update)

//     if (x + 100 > canvas.width && dx == 0) {
//         dx = 1
//     } else if (x < 0 && dx == 1) {
//         dx = 0
//     } else if (dx) {
//         draw(x -= step, y, 100, 100)
//     } else {
//         draw(x += step, y, 100, 100)
//     }

//     if (y + 100 > canvas.height && dy == 0) {
//         dy = 1
//     } else if (y < 0 && dy == 1) {
//         dy = 0
//     } else if (dy) {
//         draw(x, y -= step, 100, 100)
//     } else {
//         draw(x, y += step, 100, 100)
//     }
// })()

// const bolls = []

// class Boll {
//     constructor(xPos, yPos) {
//         this.x = xPos;
//         this.y = yPos;
//         this.dy = 0;
//         // this.speed = 1;
//         this.speed = Math.ceil(Math.random() * 4);
//         this.size = 100;
//         this.soundHit = new Audio("./sound-hit.mp3")
//         console.log('Boll init')
//     };
//     draw() {
//         ctx.beginPath()
//         ctx.rect(this.x, this.y, this.size, this.size)
//         ctx.stroke()
//         ctx.closePath()
//     };
//     sound() {
//         this.soundHit.volume = 0.4
//         this.soundHit.currentTime = .3
//         this.soundHit.play()
//     };
//     gravity() {
//         if (this.dy) {
//             this.y -= this.speed
//         }
//         if (!this.dy) {
//             this.y += this.speed
//         }
//         if (this.y + this.size > canvas.height) {
//             this.dy = 1
//             this.sound()
//         }
//         if (this.y < 0) {
//             this.dy = 0
//             this.sound()
//         }
//     }
// }


// function update() {
//     requestAnimationFrame(update)
//     // ctx.clearRect(0, 0, canvas.width, canvas.height)

//     drowBolls()
// }
// update()

// function drowBolls() {
//     bolls.forEach(boll => {
//         boll.draw()
//         boll.gravity()
//     })
// }

// canvas.addEventListener("click", ({ x, y }) => {
//     bolls.push(
//         new Boll(x, y)
//     )
// })

// ---------------------------------
// let animationFrame = 0

// class Line {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.lastTime = 0;
//         this.cellSize = 10;
//     }
//     drawLine(x, y) {
//         ctx.beginPath()
//         ctx.moveTo(x, y)
//         ctx.lineWidth = this.lineSize
//         ctx.lineTo(
//             x + Math.cos(animationFrame / 10) * this.x,
//             y + Math.sin(animationFrame / 10) * this.y
//         )
//         ctx.stroke()
//         ctx.closePath()
//         setInterval

//     }
//     animate() {
//         // let deltaTime = currentTime - this.lastTime
//         // this.lastTime = currentTime
//         // console.log(this.lastTime)
//         // console.log(deltaTime)

//         animationFrame = requestAnimationFrame(this.animate.bind(this))
//         ctx.clearRect(0, 0, canvas.width, canvas.height)

//         for (let y = 0; y < canvas.height; y += this.cellSize) {
//             for (let x = 0; x < canvas.width; x += this.cellSize) {
//                 this.drawLine(x, y)
//             }
//         }

//     }
// }

// const mouse = { x: 10, y: 10 }
// const line = new Line(mouse.x, mouse.y)
// line.animate()

// canvas.addEventListener('mousemove', ({ x, y }) => {
//     mouse.x = x;
//     mouse.y = y;
// })

// ---------------------------
let animateFrame = 0

class Block {
    constructor(context, size) {
        this.x = 20;
        this.y = 20;
        this.context = context;
        this.size = size || 100;
    }
    draw(x, y) {
        this.context.fillRect(
            x + Math.cos(animateFrame / 30) * 200,
            y + Math.sin(animateFrame / 20) * 200,
            this.size,
            this.size
        )
    }
    animate() {
        animateFrame = requestAnimationFrame(this.animate.bind(this))
        // this.context.clearRect(0, 0, canvas.width, canvas.height)
        this.draw(200, 200)
    }
}

const block = new Block(ctx, 10)
block.animate()

// ---------------------------audio player---------------------------
// ------------------------------------------------------------------
// let play = false
// const audio = new Audio('./audio.webm')
// const timeline = document.querySelector('#timeline')
// const playBtn = document.querySelector('#play')
// const pauseBtn = document.querySelector('#pause')
// const stopBtn = document.querySelector('#stop')
// const playDiration = document.querySelector('#playDiration')
// const leftPlay = document.querySelector('#leftPlay')

// timeline.setAttribute('min', 0)
// timeline.value = 0;

// const player = setInterval(() => {
//     timeline.value = Math.floor(audio.currentTime)
//     timeline.setAttribute("max", audio.duration);
//     timeline.setAttribute("min", 0);

//     playDiration.innerText = Math.floor(audio.currentTime + 1)
//     leftPlay.innerText = Math.floor(audio.duration) - Math.floor(audio.currentTime)
// }, 100)

// timeline.addEventListener('input', () => {
//     audio.currentTime = timeline.value
//     audio.play()
// })

// playBtn.addEventListener('click', () => {
//     audio.play()
//     play = true
// })

// stopBtn.addEventListener('click', () => {
//     audio.pause()
//     audio.currentTime = 0
//     play = false
// })

// pauseBtn.addEventListener('click', () => {
//     audio.pause()
//     play = false
// })







// ----------------------------rain dot------------------------------
// ------------------------------------------------------------------
// const dots = []
// const sizeDot = 10

// function randomX() {
//     return Math.floor(Math.random() * canvas.width)
// }

// function drawDot(x, y, color) {
//     ctx.beginPath()
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y += 1, sizeDot, sizeDot)
//     ctx.closePath()
// }

// const moveY = setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for (i = 0; i < dots.length; i++) {
//         // delate dot after visible
//         if (dots[i].y > canvas.height) { dots.splice(i, 1) }
//         else { drawDot(dots[i].x, dots[i].y += 1) }
//     }
// }, 10)

// const intervalGenerator = setInterval(() => {
//     for (i = 1; i < 2; i++) { dots.push({ x: randomX(), y: -sizeDot }) }
// }, 100)

// canvas.addEventListener('click', (e) => {
//     dots.push({ x: e.x, y: e.y, })
// })




// ----------------------------pinball-------------------------------
// ------------------------------------------------------------------
// class BounceBoll {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//     }
//     draw(context) {
//         context.clearRect(0, 0, window.innerWidth, window.innerHeight)
//         context.beginPath()
//         context.fillRect(this.x, this.y, this.width, this.height)
//         context.closePath()
//     }
// }

// function animation() {
//     let x = 0,
//         dx = 0,
//         y = 0,
//         dy = 0
//     const
//         width = 100,
//         height = 100


//     function move() {
//         if (x < 0) {
//             x++
//             dx = 0
//         }
//         if (dx + width > window.innerWidth) {
//             x--
//         } else {
//             dx++
//             x++
//         }

//         if (y < 0) {
//             y++
//             dy = 0
//         }
//         if (dy + width > window.innerHeight) {
//             y--
//         } else {
//             dy++
//             y++
//         }
//         const bounceBoll = new BounceBoll(x, y, width, 100)
//         bounceBoll.draw(ctx)
//     }
//     setInterval(move, 1)
// }

// animation()

// ---------------------------------------
// canvas.style.background = '#f94'
// class Circle {
//     constructor(xPos, yPos, radius, color, text) {
//         this.radius = radius ?? 50;
//         this.color = color ?? 'red';
//         this.yPos = yPos ?? this.radius;
//         this.xPos = xPos ?? this.radius;
//         this.text = text ?? '';
//         this.wrapperX = false;
//         this.wrapperY = false;
//     }
//     draw(context) {
//         context.beginPath()
//         context.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false)
//         context.lineWidth = 1;
//         context.strokeStyle = this.color;
//         context.font = '40px sans-serif';
//         context.textAlign = 'center';
//         context.textBaseline = 'middle';
//         context.fillText(this.text, this.xPos, this.yPos);
//         context.stroke()
//         context.closePath()
//     }
//     update() {
//         ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
//         this.draw(ctx)
//     }
//     animationX() {
//         if (!this.wrapperX && this.xPos + this.radius > window.innerWidth) this.wrapperX = true
//         if (this.wrapperX) this.xPos -= 1
//         if (this.xPos - this.radius < 0 || !this.wrapperX) {
//             this.wrapperX = false
//             this.xPos += 1
//         }
//     }
//     animationY() {
//         if (!this.wrapperY && this.yPos + this.radius > window.innerHeight) this.wrapperY = true
//         if (this.wrapperY) this.yPos -= 1
//         if (this.yPos - this.radius < 0 || !this.wrapperY) {
//             this.wrapperY = false
//             this.yPos += 1
//         }
//     }
// }

// const circle = new Circle(100, 200)
// circle.draw(ctx)

// const updateAnimation1 = () => {
//     requestAnimationFrame(updateAnimation1)
//     circle.animationX()
//     circle.update()
//     circle.animationY()
// }

// updateAnimation1()