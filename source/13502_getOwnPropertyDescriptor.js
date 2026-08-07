// Module ID: 13502
// Function ID: 13503
// Name: getOwnPropertyDescriptor
// Dependencies: [13503, 13505, 13512, 13535, 13523, 13537, 13533, 13538]

// Module 13502 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13505)(arg0);
    const tmp4 = require(13512) /* text */(arg1);
    if (!require(13535)) {
      if (tmp(13523)(tmp3, tmp4)) {
        let tmpResult = tmp(13537);
        tmpResult = tmp(13533);
        return tmpResult(!tmpResult(tmp(13538).f, tmp3, tmp4), tmp3[tmp4]);
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
