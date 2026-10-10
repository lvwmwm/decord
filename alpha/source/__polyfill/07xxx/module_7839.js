// Module ID: 7839
// Function ID: 7840
// Dependencies: [7836]

// Module 7839
import _mod7836 from "module_7836" /* 7836 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7836;
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
    const obj = _mod7836;
    return obj.findOffsets(byteLength);
  }
};
