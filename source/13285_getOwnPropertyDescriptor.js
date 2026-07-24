// Module ID: 13285
// Function ID: 101984
// Name: getOwnPropertyDescriptor
// Dependencies: [13286, 13288, 13295, 13318, 13306, 13320, 13316, 13321]

// Module 13285 (getOwnPropertyDescriptor)
if (!require("getOwnPropertyDescriptor")) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp = require(13288)(arg0);
    const tmp2 = require(13295) /* text */(arg1);
    if (!require(13318)) {
      while (true) {
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let num = 4;
        let tmp8 = tmp;
        let tmp9 = tmp2;
        if (require(13306) /* call */(tmp, tmp2)) {
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let num2 = 5;
          let num3 = 6;
          let tmp12 = require(13320);
          let num4 = 7;
          let tmp13 = require(13316) /* call */;
          return tmp12(!tmp13(require(13321) /* getOwnPropertyDescriptor */.f, tmp, tmp2), tmp[tmp2]);
        }
      }
    } else {
      return getOwnPropertyDescriptor(tmp, tmp2);
    }
  };
}

export const f = getOwnPropertyDescriptor;
