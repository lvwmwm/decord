// Module ID: 5534
// Function ID: 5535
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [5535]

// Module 5534 (ITEM_INFO_TYPE_EXIF)
import _mod5535 from "module_5535" /* 5535 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod5535;
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
    const obj = _mod5535;
    return obj.findOffsets(byteLength);
  }
};
