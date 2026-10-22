// Module ID: 8204
// Function ID: 8205
// Dependencies: [8205, 8203]

// Module 8204
import _modDef8203 from "module_8203" /* 8203 */;
import _modDef8205 from "module_8205" /* 8205 */;


export default {
  isTiffFile(byteLength) {
    let tmp = byteLength && byteLength.byteLength >= 4;
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === _modDef8205.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef8203.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};
