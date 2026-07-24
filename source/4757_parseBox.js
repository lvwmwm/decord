// Module ID: 4757
// Function ID: 41319
// Name: parseBox
// Dependencies: [4754]

// Module 4757 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      const parseBoxResult = require(4754) /* parseBox */.parseBox(getUint32, 0);
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
    return require(4754) /* parseBox */.findOffsets(byteLength);
  }
};
