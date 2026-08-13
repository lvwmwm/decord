// Module ID: 13640
// Function ID: 13641
// Name: getOwnPropertyDescriptor
// Dependencies: [13641, 13643, 13650, 13673, 13661, 13675, 13671, 13676]

// Module 13640 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13643)(arg0);
    const tmp4 = require(13650) /* text */(arg1);
    if (!require(13673)) {
      if (tmp(13661)(tmp3, tmp4)) {
        let tmpResult = tmp(13675);
        tmpResult = tmp(13671);
        return tmpResult(!tmpResult(tmp(13676).f, tmp3, tmp4), tmp3[tmp4]);
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
