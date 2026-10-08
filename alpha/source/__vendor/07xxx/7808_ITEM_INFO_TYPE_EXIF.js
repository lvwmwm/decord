// Module ID: 7808
// Function ID: 7809
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [7809]

// Module 7808 (ITEM_INFO_TYPE_EXIF)
import _mod7809 from "module_7809" /* 7809 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7809;
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
    const obj = _mod7809;
    return obj.findOffsets(byteLength);
  }
};
