// Module ID: 8432
// Function ID: 8433
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8433]

// Module 8432 (ITEM_INFO_TYPE_EXIF)
import _mod8433 from "module_8433" /* 8433 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8433;
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
    const obj = _mod8433;
    return obj.findOffsets(byteLength);
  }
};
