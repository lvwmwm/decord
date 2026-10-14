// Module ID: 7847
// Function ID: 7848
// Dependencies: [7844]

// Module 7847
import _mod7844 from "module_7844" /* 7844 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7844;
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
    const obj = _mod7844;
    return obj.findOffsets(byteLength);
  }
};
