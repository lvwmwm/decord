// Module ID: 5006
// Function ID: 5007
// Name: parseBox
// Dependencies: [5003]

// Module 5006 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = require(5003) /* parseBox */.parseBox(getUint32, 0);
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
    return require(5003) /* parseBox */.findOffsets(byteLength);
  }
};
