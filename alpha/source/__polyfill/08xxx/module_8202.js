// Module ID: 8202
// Function ID: 8203
// Dependencies: [8199]

// Module 8202
import _mod8199 from "module_8199" /* 8199 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod8199;
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
    const obj = _mod8199;
    return obj.findOffsets(byteLength);
  }
};
