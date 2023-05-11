function setup() {
    const width = 800;
    const height = 600;
    createCanvas(width, height);
}

function draw() {
    translate(width / 2, height / 2);
    background(255);
    colorMode(RGB);

    const POSITIVE = -1;
    const NEGATIVE = 1;

    displayOrbit(color(155, 210, 163), createOrbit(frameCount, 100, 10, NEGATIVE));
    displayOrbit(color(61, 69, 99), createOrbit(frameCount * 2, 150, 30, POSITIVE));
    displayOrbit(color(191, 105, 122), createOrbit(frameCount * 2, 200, 20, NEGATIVE));
    displayOrbit(color(240, 184, 127), createOrbit(frameCount, 250, 10, POSITIVE));
}

function createOrbit(angle, radius, size, direction) {
    const speed = 100;
    return [direction * (angle / speed) % (PI * 2), radius, size];
}

function x(radius, angle) {
    return radius * cos(angle);
}

function y(radius, angle) {
    return radius * sin(angle);
}

function displayOrbit(fillColor, orbit) {
    const [angle, radius, size] = orbit;
    line(0, 0, x(radius, angle), y(radius, angle));
    fill(fillColor);
    circle(x(radius, angle), y(radius, angle), size);
}

function keyPressed() {
    if (key === 's') {
        const seconds = 10;
        saveGif('orbits.gif', seconds);
    }
}