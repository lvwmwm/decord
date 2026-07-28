// Module ID: 4792
// Function ID: 41447
// Name: parseBox
// Dependencies: [4789]

// Module 4792 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      const parseBoxResult = require(4789) /* parseBox */.parseBox(getUint32, 0);
      let tmp5 = parseBoxResult;
      if (parseBoxResult) {
        tmp5 = "avif" === parseBoxResult.majorBrand;
      }
      return tmp5;
    } else {
      return false;
    }
  },
  findAvifOffsets(byteLength) {
    return require(4789) /* parseBox */.findOffsets(byteLength);
  }
};
