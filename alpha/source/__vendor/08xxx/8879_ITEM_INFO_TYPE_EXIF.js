// Module ID: 8879
// Function ID: 8880
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8880]

// Module 8879 (ITEM_INFO_TYPE_EXIF)
import _mod8880 from "module_8880" /* 8880 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8880;
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
    const obj = _mod8880;
    return obj.findOffsets(byteLength);
  }
};
