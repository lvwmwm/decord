// Module ID: 5002
// Function ID: 5003
// Name: parseBox
// Dependencies: [5003]

// Module 5002 (parseBox)
const require = arg1;
const dependencyMap = arg6;
arg5.default = {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = require(5003) /* parseBox */.parseBox(getUint32, 0);
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
    return require(5003) /* parseBox */.findOffsets(byteLength);
  }
};
