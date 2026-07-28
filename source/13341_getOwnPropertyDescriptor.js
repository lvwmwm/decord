// Module ID: 13341
// Function ID: 102289
// Name: getOwnPropertyDescriptor
// Dependencies: [13342, 13344, 13351, 13374, 13362, 13376, 13372, 13377]

// Module 13341 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp = require(13344)(arg0);
    const tmp2 = require(13351) /* text */(arg1);
    if (!require(13374)) {
      while (true) {
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let num = 4;
        let tmp8 = tmp;
        let tmp9 = tmp2;
        if (require(13362) /* call */(tmp, tmp2)) {
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let num2 = 5;
          let num3 = 6;
          let tmp12 = require(13376);
          let num4 = 7;
          let tmp13 = require(13372) /* call */;
          return tmp12(!tmp13(require(13377) /* getOwnPropertyDescriptor */.f, tmp, tmp2), tmp[tmp2]);
        }
      }
    } else {
      return getOwnPropertyDescriptor(tmp, tmp2);
    }
  };
}

export const f = getOwnPropertyDescriptor;
