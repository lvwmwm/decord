// Module ID: 8276
// Function ID: 8277
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8277]

// Module 8276 (ITEM_INFO_TYPE_EXIF)
import _mod8277 from "module_8277" /* 8277 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8277;
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
    const obj = _mod8277;
    return obj.findOffsets(byteLength);
  }
};
