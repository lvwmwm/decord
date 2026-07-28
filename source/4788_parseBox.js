// Module ID: 4788
// Function ID: 41414
// Name: parseBox
// Dependencies: [4789]

// Module 4788 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isHeicFile(getUint32) {
    if (getUint32) {
      const parseBoxResult = require(4789) /* parseBox */.parseBox(getUint32, 0);
      let tmp5 = parseBoxResult;
      if (parseBoxResult) {
        const items = ["heic", "heix", "hevc", "hevx", "heim", "heis", "hevm", "hevs", "mif1"];
        tmp5 = -1 !== items.indexOf(parseBoxResult.majorBrand);
      }
      return tmp5;
    } else {
      return false;
    }
  },
  findHeicOffsets(byteLength) {
    return require(4789) /* parseBox */.findOffsets(byteLength);
  }
};
