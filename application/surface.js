/**
 * Parent class to all types of surfaces
 */

const Position = require('./position');

function Surface(xMin, yMin, xMax, yMax) {
    if (isNaN(xMin) || isNaN(yMin) || isNaN(xMax) || isNaN(yMax)) {
        throw 'Coordinates are not valid numbers';
    } else if ((xMin > xMax) || (yMin > yMax)) {
        throw 'Max coordinate lesser than min coordinate';
    }
    this.xMin = xMin;
    this.yMin = yMin;
    this.xMax = xMax;
    this.yMax = yMax;
}

Surface.prototype.isPosInBoundary = function(pos) {
    if (pos instanceof Position) {
        let posX = pos.getX();
        let posY = pos.getY();
        if (posX >= this.xMin && posY >= this.yMin && posX <= this.xMax && posY <= this.yMax) {
            return true;
        }
    }
    return false;
};

Surface.prototype.getXMin = function() {
    return this.xMin;
};

Surface.prototype.getYMin = function() {
    return this.yMin;
};

Surface.prototype.getXMax = function() {
    return this.xMax;
};

Surface.prototype.getYMax = function() {
    return this.yMax;
};

Surface.prototype.toString = function() {
    return '\n{\n    xMin: ' + this.xMin + '\n    yMin: ' + this.yMin + '\n    xMax: ' + this.xMax + '\n    yMax: ' + this.yMax + '\n}';
};

module.exports = Surface;