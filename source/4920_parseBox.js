// Module ID: 4920
// Function ID: 4921
// Name: parseBox
// Dependencies: [4921]

// Module 4920 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = require(4921) /* parseBox */.parseBox(getUint32, 0);
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
    return require(4921) /* parseBox */.findOffsets(byteLength);
  }
};
