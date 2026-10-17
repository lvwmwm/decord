// Module ID: 8103
// Function ID: 8104
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8104]

// Module 8103 (ITEM_INFO_TYPE_EXIF)
import _mod8104 from "module_8104" /* 8104 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8104;
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
    const obj = _mod8104;
    return obj.findOffsets(byteLength);
  }
};
