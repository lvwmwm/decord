// Module ID: 13639
// Function ID: 13640
// Name: getOwnPropertyDescriptor
// Dependencies: [13640, 13642, 13649, 13672, 13660, 13674, 13670, 13675]

// Module 13639 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13642)(arg0);
    const tmp4 = require(13649) /* text */(arg1);
    if (!require(13672)) {
      if (tmp(13660)(tmp3, tmp4)) {
        let tmpResult = tmp(13674);
        tmpResult = tmp(13670);
        return tmpResult(!tmpResult(tmp(13675).f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;
