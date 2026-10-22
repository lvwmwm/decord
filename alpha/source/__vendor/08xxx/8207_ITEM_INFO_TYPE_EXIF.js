// Module ID: 8207
// Function ID: 8208
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8208]

// Module 8207 (ITEM_INFO_TYPE_EXIF)
import _mod8208 from "module_8208" /* 8208 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8208;
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
    const obj = _mod8208;
    return obj.findOffsets(byteLength);
  }
};
