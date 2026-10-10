// Module ID: 7835
// Function ID: 7836
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [7836]

// Module 7835 (ITEM_INFO_TYPE_EXIF)
import _mod7836 from "module_7836" /* 7836 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7836;
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
    const obj = _mod7836;
    return obj.findOffsets(byteLength);
  }
};
