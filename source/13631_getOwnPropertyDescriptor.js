// Module ID: 13631
// Function ID: 13632
// Name: getOwnPropertyDescriptor
// Dependencies: [13632, 13634, 13641, 13664, 13652, 13666, 13662, 13667]

// Module 13631 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13634)(arg0);
    const tmp4 = require(13641) /* text */(arg1);
    if (!require(13664)) {
      if (tmp(13652)(tmp3, tmp4)) {
        let tmpResult = tmp(13666);
        tmpResult = tmp(13662);
        return tmpResult(!tmpResult(tmp(13667).f, tmp3, tmp4), tmp3[tmp4]);
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
