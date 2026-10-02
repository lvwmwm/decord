// Module ID: 5535
// Function ID: 5536
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [5536]

// Module 5535 (ITEM_INFO_TYPE_EXIF)
import _mod5536 from "module_5536" /* 5536 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod5536;
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
    const obj = _mod5536;
    return obj.findOffsets(byteLength);
  }
};
