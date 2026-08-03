// Module ID: 4880
// Function ID: 4881
// Name: parseBox
// Dependencies: [4877]

// Module 4880 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = require(4877) /* parseBox */.parseBox(getUint32, 0);
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
    return require(4877) /* parseBox */.findOffsets(byteLength);
  }
};
