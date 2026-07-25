// Module ID: 13296
// Function ID: 102111
// Name: getOwnPropertyDescriptor
// Dependencies: [13297, 13299, 13306, 13329, 13317, 13331, 13327, 13332]

// Module 13296 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp = require(13299)(arg0);
    const tmp2 = require(13306) /* text */(arg1);
    if (!require(13329)) {
      while (true) {
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let num = 4;
        let tmp8 = tmp;
        let tmp9 = tmp2;
        if (require(13317) /* call */(tmp, tmp2)) {
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let num2 = 5;
          let num3 = 6;
          let tmp12 = require(13331);
          let num4 = 7;
          let tmp13 = require(13327) /* call */;
          return tmp12(!tmp13(require(13332) /* getOwnPropertyDescriptor */.f, tmp, tmp2), tmp[tmp2]);
        }
      }
    } else {
      return getOwnPropertyDescriptor(tmp, tmp2);
    }
  };
}

export const f = getOwnPropertyDescriptor;
