// Module ID: 8880
// Function ID: 8881
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8881]

// Module 8880 (ITEM_INFO_TYPE_EXIF)
import _mod8881 from "module_8881" /* 8881 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8881;
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
    const obj = _mod8881;
    return obj.findOffsets(byteLength);
  }
};
