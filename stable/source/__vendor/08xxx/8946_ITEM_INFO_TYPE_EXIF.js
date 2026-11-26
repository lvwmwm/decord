// Module ID: 8946
// Function ID: 8947
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8947]

// Module 8946 (ITEM_INFO_TYPE_EXIF)
import _mod8947 from "module_8947" /* 8947 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8947;
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
    const obj = _mod8947;
    return obj.findOffsets(byteLength);
  }
};
