// Module ID: 8212
// Function ID: 8213
// Dependencies: [8209]

// Module 8212
import _mod8209 from "module_8209" /* 8209 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8209;
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
    const obj = _mod8209;
    return obj.findOffsets(byteLength);
  }
};
