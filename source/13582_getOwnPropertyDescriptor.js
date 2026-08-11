// Module ID: 13582
// Function ID: 13583
// Name: getOwnPropertyDescriptor
// Dependencies: [13583, 13585, 13592, 13615, 13603, 13617, 13613, 13618]

// Module 13582 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13585)(arg0);
    const tmp4 = require(13592) /* text */(arg1);
    if (!require(13615)) {
      if (tmp(13603)(tmp3, tmp4)) {
        let tmpResult = tmp(13617);
        tmpResult = tmp(13613);
        return tmpResult(!tmpResult(tmp(13618).f, tmp3, tmp4), tmp3[tmp4]);
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
