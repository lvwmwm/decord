// Module ID: 8057
// Function ID: 8058
// Dependencies: [8054]

// Module 8057
import _mod8054 from "module_8054" /* 8054 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8054;
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
    const obj = _mod8054;
    return obj.findOffsets(byteLength);
  }
};
