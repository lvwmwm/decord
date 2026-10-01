// Module ID: 5538
// Function ID: 5539
// Dependencies: [5535]

// Module 5538
import _mod5535 from "module_5535" /* 5535 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod5535;
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
    const obj = _mod5535;
    return obj.findOffsets(byteLength);
  }
};
