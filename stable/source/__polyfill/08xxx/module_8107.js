// Module ID: 8107
// Function ID: 8108
// Dependencies: [8104]

// Module 8107
import _mod8104 from "module_8104" /* 8104 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8104;
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
    const obj = _mod8104;
    return obj.findOffsets(byteLength);
  }
};
