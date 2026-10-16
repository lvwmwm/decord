// Module ID: 8056
// Function ID: 8057
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8057]

// Module 8056 (ITEM_INFO_TYPE_EXIF)
import _mod8057 from "module_8057" /* 8057 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8057;
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
    const obj = _mod8057;
    return obj.findOffsets(byteLength);
  }
};
