// Module ID: 8390
// Function ID: 8391
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8391]

// Module 8390 (ITEM_INFO_TYPE_EXIF)
import _mod8391 from "module_8391" /* 8391 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8391;
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
    const obj = _mod8391;
    return obj.findOffsets(byteLength);
  }
};
