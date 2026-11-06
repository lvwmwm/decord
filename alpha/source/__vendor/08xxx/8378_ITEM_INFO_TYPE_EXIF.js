// Module ID: 8378
// Function ID: 8379
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8379]

// Module 8378 (ITEM_INFO_TYPE_EXIF)
import _mod8379 from "module_8379" /* 8379 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8379;
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
    const obj = _mod8379;
    return obj.findOffsets(byteLength);
  }
};
