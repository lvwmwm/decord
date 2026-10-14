// Module ID: 7843
// Function ID: 7844
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [7844]

// Module 7843 (ITEM_INFO_TYPE_EXIF)
import _mod7844 from "module_7844" /* 7844 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7844;
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
    const obj = _mod7844;
    return obj.findOffsets(byteLength);
  }
};
