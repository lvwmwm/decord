// Module ID: 8208
// Function ID: 8209
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8209]

// Module 8208 (ITEM_INFO_TYPE_EXIF)
import _mod8209 from "module_8209" /* 8209 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8209;
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
    const obj = _mod8209;
    return obj.findOffsets(byteLength);
  }
};
