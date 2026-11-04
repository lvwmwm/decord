// Module ID: 8427
// Function ID: 8428
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8428]

// Module 8427 (ITEM_INFO_TYPE_EXIF)
import _mod8428 from "module_8428" /* 8428 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8428;
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
    const obj = _mod8428;
    return obj.findOffsets(byteLength);
  }
};
