// Module ID: 13451
// Function ID: 13452
// Name: getOwnPropertyDescriptor
// Dependencies: [13452, 13454, 13461, 13484, 13472, 13486, 13482, 13487]

// Module 13451 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13454)(arg0);
    const tmp4 = require(13461) /* text */(arg1);
    if (!require(13484)) {
      if (tmp(13472)(tmp3, tmp4)) {
        let tmpResult = tmp(13486);
        tmpResult = tmp(13482);
        return tmpResult(!tmpResult(tmp(13487).f, tmp3, tmp4), tmp3[tmp4]);
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
