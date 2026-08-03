// Module ID: 13446
// Function ID: 13447
// Name: getOwnPropertyDescriptor
// Dependencies: [13447, 13449, 13456, 13479, 13467, 13481, 13477, 13482]

// Module 13446 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13449)(arg0);
    const tmp4 = require(13456) /* text */(arg1);
    if (!require(13479)) {
      if (tmp(13467)(tmp3, tmp4)) {
        let tmpResult = tmp(13481);
        tmpResult = tmp(13477);
        return tmpResult(!tmpResult(tmp(13482).f, tmp3, tmp4), tmp3[tmp4]);
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
