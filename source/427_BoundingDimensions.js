// Module ID: 427
// Function ID: 428
// Name: BoundingDimensions
// Dependencies: [426]

// Module 427 (BoundingDimensions)
class BoundingDimensions {
  constructor(arg0, arg1) {
    return;
  }
  destructor() {
    return;
  }
  static getPooledFromElement(arg0) {
    return BoundingDimensions.getPooled(global.offsetWidth, global.offsetHeight);
  }
}
require("oneArgumentPooler").addPoolingTo(BoundingDimensions, require("oneArgumentPooler").twoArgumentPooler);

export default BoundingDimensions;
