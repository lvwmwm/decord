// Module ID: 420
// Function ID: 5895
// Name: BoundingDimensions
// Dependencies: [419]

// Module 420 (BoundingDimensions)
class BoundingDimensions {
  constructor(arg0, arg1) {
    this.width = global;
    this.height = arg1;
    return;
  }
  destructor() {
    this.width = null;
    this.height = null;
    return;
  }
  static getPooledFromElement(arg0) {
    return BoundingDimensions.getPooled(global.offsetWidth, global.offsetHeight);
  }
}
require("oneArgumentPooler").addPoolingTo(BoundingDimensions, require("oneArgumentPooler").twoArgumentPooler);

export default BoundingDimensions;
