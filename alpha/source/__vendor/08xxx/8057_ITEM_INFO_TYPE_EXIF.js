// Module ID: 8057
// Function ID: 8058
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8058]

// Module 8057 (ITEM_INFO_TYPE_EXIF)
import _mod8058 from "module_8058" /* 8058 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8058;
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
    const obj = _mod8058;
    return obj.findOffsets(byteLength);
  }
};
