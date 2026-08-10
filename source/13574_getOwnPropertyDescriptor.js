// Module ID: 13574
// Function ID: 13575
// Name: getOwnPropertyDescriptor
// Dependencies: [13575, 13577, 13584, 13607, 13595, 13609, 13605, 13610]

// Module 13574 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13577)(arg0);
    const tmp4 = require(13584) /* text */(arg1);
    if (!require(13607)) {
      if (tmp(13595)(tmp3, tmp4)) {
        let tmpResult = tmp(13609);
        tmpResult = tmp(13605);
        return tmpResult(!tmpResult(tmp(13610).f, tmp3, tmp4), tmp3[tmp4]);
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
