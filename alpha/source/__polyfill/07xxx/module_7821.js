// Module ID: 7821
// Function ID: 7822
// Dependencies: [7818]

// Module 7821
import _mod7818 from "module_7818" /* 7818 */;


export default {
  isAvifFile(getUint32) {
    if (getUint32) {
      try {
        const obj = _mod7818;
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
    const obj = _mod7818;
    return obj.findOffsets(byteLength);
  }
};
