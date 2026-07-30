// Module ID: 13359
// Function ID: 13360
// Name: getOwnPropertyDescriptor
// Dependencies: [13360, 13362, 13369, 13392, 13380, 13394, 13390, 13395]

// Module 13359 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13362)(arg0);
    const tmp4 = require(13369) /* text */(arg1);
    if (!require(13392)) {
      if (tmp(13380)(tmp3, tmp4)) {
        let tmpResult = tmp(13394);
        tmpResult = tmp(13390);
        return tmpResult(!tmpResult(tmp(13395).f, tmp3, tmp4), tmp3[tmp4]);
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
