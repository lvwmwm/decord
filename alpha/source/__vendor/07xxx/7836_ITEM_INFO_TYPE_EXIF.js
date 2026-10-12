// Module ID: 7836
// Function ID: 7837
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [7837]

// Module 7836 (ITEM_INFO_TYPE_EXIF)
import _mod7837 from "module_7837" /* 7837 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7837;
        let parseBoxResult = obj.parseBox(getUint32, 0);
        const tmp4 = parseBoxResult;
        if (tmp4) {
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
    const obj = _mod7837;
    return obj.findOffsets(byteLength);
  }
};
