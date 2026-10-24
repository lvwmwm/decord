// Module ID: 8222
// Function ID: 8223
// Name: ITEM_INFO_TYPE_EXIF
// Dependencies: [8223]

// Module 8222 (ITEM_INFO_TYPE_EXIF)
import _mod8223 from "module_8223" /* 8223 */;


export default {
  isHeicFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8223;
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
    const obj = _mod8223;
    return obj.findOffsets(byteLength);
  }
};
