// Module ID: 92
// Function ID: 1527
// Name: getConstants
// Dependencies: [55]

// Module 92 (getConstants)
const enforcing = require("requireModule").getEnforcing("SourceCode");
let c1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};
