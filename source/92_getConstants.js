// Module ID: 92
// Function ID: 1527
// Name: getConstants
// Dependencies: []

// Module 92 (getConstants)
const enforcing = importAll(dependencyMap[0]).getEnforcing("SourceCode");
let closure_1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      const constants2 = constants.getConstants();
    }
    return constants2;
  }
};
