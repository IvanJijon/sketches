// In order to avoid globals
// variables could be wrapped in an object as attributes 
// and initialized during setup()

// orbits
let [o1, o2, o3, o4] = [undefined, undefined, undefined, undefined]
// satellites
let [s1, s2, s3, s4] = [undefined, undefined, undefined, undefined]

// displayers
const od = new OrbitDisplayer()
const sd = new SatteliteOnlyDisplayer()
const srd = new SatelliteWithRadiusDisplayer()

function setup() {
    createCanvas(800, 600)
    if (o1 === undefined) {
        [o1, o2, o3, o4] = createOrbits()
        od.setDisplayableObjects(o1, o4)
    }
    if (s1 === undefined) {
        [s1, s2, s3, s4] = createSatellites()
        sd.setDisplayableObjects(s1, s4)
        srd.setDisplayableObjects(s2, s3)
    }
}

function draw() {
    translate(width / 2, height / 2)
    background(255)
    colorMode(RGB);

    od.displayObjects()
    sd.displayObjects()
    srd.displayObjects()

    if (s1 !== undefined) {

        [s1, s2, s3, s4].forEach(s => satelliteMotion(s));
    }
}

function satelliteMotion(satellite) {
    satellite.incrementAngle()
}

function createOrbits() {
    return [
        new Orbit(0, 0, 100),
        new Orbit(0, 0, 150),
        new Orbit(0, 0, 200),
        new Orbit(0, 0, 250)
    ]
}

function createSatellites() {
    return [
        new Satellite(color(155, 210, 163), 10, 1, o1),
        new Satellite(color(61, 69, 99), 30, 2, o2),
        new Satellite(color(191, 105, 122), 20, -2, o3),
        new Satellite(color(240, 184, 127), 10, -1, o4)
    ]
}