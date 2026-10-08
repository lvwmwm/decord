// Module ID: 7812
// Function ID: 7813
// Dependencies: [7809]

// Module 7812
import _mod7809 from "module_7809" /* 7809 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7809;
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
    const obj = _mod7809;
    return obj.findOffsets(byteLength);
  }
};
