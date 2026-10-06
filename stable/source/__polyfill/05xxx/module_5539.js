// Module ID: 5539
// Function ID: 5540
// Dependencies: [5536]

// Module 5539
import _mod5536 from "module_5536" /* 5536 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod5536;
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
    const obj = _mod5536;
    return obj.findOffsets(byteLength);
  }
};
