// Module ID: 13488
// Function ID: 13489
// Name: getOwnPropertyDescriptor
// Dependencies: [13489, 13491, 13498, 13521, 13509, 13523, 13519, 13524]

// Module 13488 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13491)(arg0);
    const tmp4 = require(13498) /* text */(arg1);
    if (!require(13521)) {
      if (tmp(13509)(tmp3, tmp4)) {
        let tmpResult = tmp(13523);
        tmpResult = tmp(13519);
        return tmpResult(!tmpResult(tmp(13524).f, tmp3, tmp4), tmp3[tmp4]);
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
