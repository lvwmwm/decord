// Module ID: 8287
// Function ID: 8288
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8288]

// Module 8287 (ITEM_INFO_TYPE_EXIF)
import _mod8288 from "module_8288" /* 8288 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8288;
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
    const obj = _mod8288;
    return obj.findOffsets(byteLength);
  }
};
