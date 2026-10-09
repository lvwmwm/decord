// Module ID: 7817
// Function ID: 7818
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [7818]

// Module 7817 (ITEM_INFO_TYPE_EXIF)
import _mod7818 from "module_7818" /* 7818 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7818;
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
    const obj = _mod7818;
    return obj.findOffsets(byteLength);
  }
};
