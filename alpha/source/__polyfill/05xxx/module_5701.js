// Module ID: 5701
// Function ID: 5702
// Dependencies: [5702]

// Module 5701
import findOffsets from "findOffsets" /* 5702 */;

require = arg1;
const dependencyMap = arg6;

export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        let parseBoxResult = findOffsets.parseBox(getUint32, 0);
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
    return findOffsets.findOffsets(byteLength);
  }
};
