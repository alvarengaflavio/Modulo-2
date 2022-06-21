const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

ctx.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2;
const keys = {
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    w: {
        pressed: false,
    },
    ArrowRight: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
    ArrowUp: {
        pressed: false,
    },
};
let lastKey;

class Sprite {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.lastKey;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, 50, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.position.y + this.height + this.velocity.y >= canvas.height
            ? (this.velocity.y = 0) // se Sprite no chão vy = 0, senão acelera g
            : (this.velocity.y += gravity);
    }
}

const player = new Sprite({
    position: { x: 200, y: 0 },
    velocity: { x: 0, y: 0 },
});

const enemy = new Sprite({
    position: {
        x: canvas.width - 200,
        y: 0,
    },
    velocity: { x: 0, y: 0 },
});

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // Movimento do Jogador
    if (keys.a.pressed && lastKey === 'a') {
        player.velocity.x = -1;
    } else if (keys.d.pressed && lastKey === 'd') {
        player.velocity.x = 1;
    }

    // Movimento do Enemy
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -1;
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = 1;
    }
}

animate();

window.addEventListener('keydown', event => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd';
            break;

        case 'a':
            keys.a.pressed = true;
            lastKey = 'a';
            break;
        case 'w':
            keys.w.pressed = true;
            player.velocity.y = -10;
            break;
        
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = 'ArrowRight';
            break;

        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft';
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            enemy.velocity.y = -10;
            break;

        default:
            break;
    }
    console.log(event.key);
});

window.addEventListener('keyup', event => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;

        case 'a':
            keys.a.pressed = false;
            break;

        case 'w':
            keys.w.pressed = false;
            break;

        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;

        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;

        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break;

        default:
            break;
    }
    console.log(event.key);
});