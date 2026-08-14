// Module ID: 13643
// Function ID: 13644
// Name: getOwnPropertyDescriptor
// Dependencies: [13644, 13646, 13653, 13676, 13664, 13678, 13674, 13679]

// Module 13643 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13646)(arg0);
    const tmp4 = require(13653) /* text */(arg1);
    if (!require(13676)) {
      if (tmp(13664)(tmp3, tmp4)) {
        let tmpResult = tmp(13678);
        tmpResult = tmp(13674);
        return tmpResult(!tmpResult(tmp(13679).f, tmp3, tmp4), tmp3[tmp4]);
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
