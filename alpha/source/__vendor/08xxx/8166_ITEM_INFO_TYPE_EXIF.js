// Module ID: 8166
// Function ID: 8167
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8167]

// Module 8166 (ITEM_INFO_TYPE_EXIF)
import _mod8167 from "module_8167" /* 8167 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8167;
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
    const obj = _mod8167;
    return obj.findOffsets(byteLength);
  }
};
