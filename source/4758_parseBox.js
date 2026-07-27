// Module ID: 4758
// Function ID: 41332
// Name: parseBox
// Dependencies: [4755]

// Module 4758 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      const parseBoxResult = require(4755) /* parseBox */.parseBox(getUint32, 0);
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
    return require(4755) /* parseBox */.findOffsets(byteLength);
  }
};
