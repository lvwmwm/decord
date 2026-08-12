// Module ID: 4979
// Function ID: 4980
// Name: parseBox
// Dependencies: [4980]

// Module 4979 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = require(4980) /* parseBox */.parseBox(getUint32, 0);
        if (parseBoxResult) {
          const items = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
          parseBoxResult = -1 !== items.indexOf(parseBoxResult.majorBrand);
        }
        return parseBoxResult;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  },
  findHeicOffsets(byteLength) {
    return require(4980) /* parseBox */.findOffsets(byteLength);
  }
};
