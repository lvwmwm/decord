// Module ID: 7831
// Function ID: 7832
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [7832]

// Module 7831 (ITEM_INFO_TYPE_EXIF)
import _mod7832 from "module_7832" /* 7832 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7832;
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
    const obj = _mod7832;
    return obj.findOffsets(byteLength);
  }
};
