// Module ID: 8283
// Function ID: 8284
// Dependencies: [8280]

// Module 8283
import _mod8280 from "module_8280" /* 8280 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8280;
        let parseBoxResult = obj.parseBox(getUint32, 0);
        const tmp4 = parseBoxResult;
        if (tmp4) {
          parseBoxResult = "avif" === parseBoxResult.majorBrand;
        }
        return parseBoxResult;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  },
  findAvifOffsets(byteLength) {
    const obj = _mod8280;
    return obj.findOffsets(byteLength);
  }
};
