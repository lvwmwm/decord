// Module ID: 13232
// Function ID: 101657
// Name: getOwnPropertyDescriptor
// Dependencies: [13233, 13235, 13242, 13265, 13253, 13267, 13263, 13268]

// Module 13232 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp = require(13235)(arg0);
    const tmp2 = require(13242) /* text */(arg1);
    if (!require(13265)) {
      while (true) {
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let num = 4;
        let tmp8 = tmp;
        let tmp9 = tmp2;
        if (require(13253) /* call */(tmp, tmp2)) {
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let num2 = 5;
          let num3 = 6;
          let tmp12 = require(13267);
          let num4 = 7;
          let tmp13 = require(13263) /* call */;
          return tmp12(!tmp13(require(13268) /* getOwnPropertyDescriptor */.f, tmp, tmp2), tmp[tmp2]);
        }
      }
    } else {
      return getOwnPropertyDescriptor(tmp, tmp2);
    }
  };
}

export const f = getOwnPropertyDescriptor;
