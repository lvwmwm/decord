// Module ID: 83
// Function ID: 84
// Name: getConstants
// Dependencies: [30]

// Module 83 (getConstants)
import getAll from "get" /* 30 */;

const enforcing = getAll.getEnforcing("SourceCode");
let c1 = null;

export default {
  getConstants() {
    if (null == constants2) {
      constants2 = constants.getConstants();
    }
    return constants2;
  }
};
