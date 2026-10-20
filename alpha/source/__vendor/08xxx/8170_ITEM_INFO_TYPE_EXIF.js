// Module ID: 8170
// Function ID: 8171
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8171]

// Module 8170 (ITEM_INFO_TYPE_EXIF)
import _mod8171 from "module_8171" /* 8171 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8171;
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
    const obj = _mod8171;
    return obj.findOffsets(byteLength);
  }
};
