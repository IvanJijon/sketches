class Satellite {
    constructor(color, size, step, orbit) {
        this.color = color
        this.size = size

        this.angle = random(1, TWO_PI)
        this.step = step

        this.orbit = orbit
    }

    xInOrbit() {
        return this.orbit.radius * cos(this.angle)
    }

    yInOrbit() {
        return this.orbit.radius * sin(this.angle)
    }

    incrementAngle() {
        this.angle = (this.angle + this.step * deltaTime / 1000) % TWO_PI
    }
}
