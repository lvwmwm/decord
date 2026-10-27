// Module ID: 8220
// Function ID: 8221
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8221]

// Module 8220 (ITEM_INFO_TYPE_EXIF)
import _mod8221 from "module_8221" /* 8221 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8221;
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
    const obj = _mod8221;
    return obj.findOffsets(byteLength);
  }
};
