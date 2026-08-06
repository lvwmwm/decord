// Module ID: 4924
// Function ID: 4925
// Name: parseBox
// Dependencies: [4921]

// Module 4924 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = require(4921) /* parseBox */.parseBox(getUint32, 0);
        if (parseBoxResult) {
          parseBoxResult = "avif" === parseBoxResult.majorBrand;
        }
        return parseBoxResult;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  },
  findAvifOffsets(byteLength) {
    return require(4921) /* parseBox */.findOffsets(byteLength);
  }
};
