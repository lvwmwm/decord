// Module ID: 8361
// Function ID: 8362
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8362]

// Module 8361 (ITEM_INFO_TYPE_EXIF)
import _mod8362 from "module_8362" /* 8362 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8362;
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
    const obj = _mod8362;
    return obj.findOffsets(byteLength);
  }
};
