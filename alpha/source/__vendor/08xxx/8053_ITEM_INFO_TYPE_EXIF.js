// Module ID: 8053
// Function ID: 8054
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8054]

// Module 8053 (ITEM_INFO_TYPE_EXIF)
import _mod8054 from "module_8054" /* 8054 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8054;
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
    const obj = _mod8054;
    return obj.findOffsets(byteLength);
  }
};
