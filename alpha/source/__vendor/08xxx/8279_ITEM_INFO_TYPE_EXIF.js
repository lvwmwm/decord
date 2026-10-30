// Module ID: 8279
// Function ID: 8280
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8280]

// Module 8279 (ITEM_INFO_TYPE_EXIF)
import _mod8280 from "module_8280" /* 8280 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8280;
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
    const obj = _mod8280;
    return obj.findOffsets(byteLength);
  }
};
