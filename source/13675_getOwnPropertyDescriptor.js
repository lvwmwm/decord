// Module ID: 13675
// Function ID: 13676
// Name: getOwnPropertyDescriptor
// Dependencies: [13676, 13678, 13685, 13708, 13696, 13710, 13706, 13711]

// Module 13675 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = require(13678)(arg0);
    const tmp4 = require(13685) /* text */(arg1);
    if (!require(13708)) {
      if (tmp(13696)(tmp3, tmp4)) {
        let tmpResult = tmp(13710);
        tmpResult = tmp(13706);
        return tmpResult(!tmpResult(tmp(13711).f, tmp3, tmp4), tmp3[tmp4]);
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
