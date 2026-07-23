// Module ID: 105
// Function ID: 1593
// Name: getConstants
// Dependencies: [55]

// Module 105 (getConstants)
const enforcing = require("requireModule").getEnforcing("DeviceInfo");
let c1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};
