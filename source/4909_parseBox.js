// Module ID: 4909
// Function ID: 4910
// Name: parseBox
// Dependencies: [4906]

// Module 4909 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = require(4906) /* parseBox */.parseBox(getUint32, 0);
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
    return require(4906) /* parseBox */.findOffsets(byteLength);
  }
};
