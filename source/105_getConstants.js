// Module ID: 105
// Function ID: 1593
// Name: getConstants
// Dependencies: []

// Module 105 (getConstants)
const enforcing = importAll(dependencyMap[0]).getEnforcing("DeviceInfo");
let closure_1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      const constants2 = constants.getConstants();
    }
    return constants2;
  }
};
