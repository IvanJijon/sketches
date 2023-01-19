class Displayer {
    constructor() {
        this.objectsToDisplay = []
    }

    setDisplayableObjects(...obj) {
        this.objectsToDisplay = obj
    }

    displayObjects() {
        this.objectsToDisplay.forEach(
            obj => {
                this.display(obj)
            }
        )
    }

    display() {
        throw new Error('This method must be implemented by the specific displayer');
    }
}

class SatteliteOnlyDisplayer extends Displayer {
    display(satellite) {
        fill(satellite.color)
        circle(satellite.xInOrbit(), satellite.yInOrbit(), satellite.size)
    }
}

class SatelliteWithRadiusDisplayer extends Displayer {
    display(satellite) {
        fill(satellite.color)
        line(0, 0, satellite.xInOrbit(), satellite.yInOrbit())
        circle(satellite.xInOrbit(), satellite.yInOrbit(), satellite.size)
    }
}

class OrbitDisplayer extends Displayer {
    display(orbit) {
        this.setLineDash([5, 5])
        stroke(color(220, 220, 220))
        noFill()
        circle(orbit.x, orbit.y, orbit.radius * 2)
        this.setLineDash([])
        stroke(1)
    }

    setLineDash(list) {
        drawingContext.setLineDash(list);
    }
}
