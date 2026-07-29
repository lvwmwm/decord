// Module ID: 13364
// Function ID: 13365
// Name: getOwnPropertyDescriptor
// Dependencies: [13365, 13367, 13374, 13397, 13385, 13399, 13395, 13400]

// Module 13364 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13367)(arg0);
    const tmp4 = require(13374) /* text */(arg1);
    if (!require(13397)) {
      if (tmp(13385)(tmp3, tmp4)) {
        let tmpResult = tmp(13399);
        tmpResult = tmp(13395);
        return tmpResult(!tmpResult(tmp(13400).f, tmp3, tmp4), tmp3[tmp4]);
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
