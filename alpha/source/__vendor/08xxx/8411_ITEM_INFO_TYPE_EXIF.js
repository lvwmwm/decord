// Module ID: 8411
// Function ID: 8412
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8412]

// Module 8411 (ITEM_INFO_TYPE_EXIF)
import _mod8412 from "module_8412" /* 8412 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8412;
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
    const obj = _mod8412;
    return obj.findOffsets(byteLength);
  }
};
