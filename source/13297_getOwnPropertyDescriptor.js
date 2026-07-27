// Module ID: 13297
// Function ID: 102116
// Name: getOwnPropertyDescriptor
// Dependencies: [13298, 13300, 13307, 13330, 13318, 13332, 13328, 13333]

// Module 13297 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp = require(13300)(arg0);
    const tmp2 = require(13307) /* text */(arg1);
    if (!require(13330)) {
      while (true) {
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let num = 4;
        let tmp8 = tmp;
        let tmp9 = tmp2;
        if (require(13318) /* call */(tmp, tmp2)) {
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let num2 = 5;
          let num3 = 6;
          let tmp12 = require(13332);
          let num4 = 7;
          let tmp13 = require(13328) /* call */;
          return tmp12(!tmp13(require(13333) /* getOwnPropertyDescriptor */.f, tmp, tmp2), tmp[tmp2]);
        }
      }
    } else {
      return getOwnPropertyDescriptor(tmp, tmp2);
    }
  };
}

export const f = getOwnPropertyDescriptor;
