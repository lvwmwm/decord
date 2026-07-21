// Module ID: 13109
// Function ID: 99446
// Name: getOwnPropertyDescriptor
// Dependencies: []

// Module 13109 (getOwnPropertyDescriptor)
if (!require(dependencyMap[0])) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp = require(dependencyMap[1])(arg0);
    const tmp2 = require(dependencyMap[2])(arg1);
    if (!require(dependencyMap[3])) {
      while (true) {
        let tmp6 = require;
        let tmp7 = dependencyMap;
        let num = 4;
        let tmp8 = tmp;
        let tmp9 = tmp2;
        if (require(dependencyMap[4])(tmp, tmp2)) {
          let tmp10 = require;
          let tmp11 = dependencyMap;
          let num2 = 5;
          let num3 = 6;
          let tmp12 = require(dependencyMap[5]);
          let num4 = 7;
          let tmp13 = require(dependencyMap[6]);
          return tmp12(!tmp13(require(dependencyMap[7]).f, tmp, tmp2), tmp[tmp2]);
        }
      }
    } else {
      return getOwnPropertyDescriptor(tmp, tmp2);
    }
  };
}

export const f = getOwnPropertyDescriptor;
