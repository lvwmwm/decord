// Module ID: 13572
// Function ID: 13573
// Name: getOwnPropertyDescriptor
// Dependencies: [13573, 13575, 13582, 13605, 13593, 13607, 13603, 13608]

// Module 13572 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13575)(arg0);
    const tmp4 = require(13582) /* text */(arg1);
    if (!require(13605)) {
      if (tmp(13593)(tmp3, tmp4)) {
        let tmpResult = tmp(13607);
        tmpResult = tmp(13603);
        return tmpResult(!tmpResult(tmp(13608).f, tmp3, tmp4), tmp3[tmp4]);
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
