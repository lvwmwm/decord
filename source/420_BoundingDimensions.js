// Module ID: 420
// Function ID: 5895
// Name: BoundingDimensions
// Dependencies: []

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
importDefault(dependencyMap[0]).addPoolingTo(BoundingDimensions, importDefault(dependencyMap[0]).twoArgumentPooler);

export default BoundingDimensions;
