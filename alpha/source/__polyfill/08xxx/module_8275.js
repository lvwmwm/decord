// Module ID: 8275
// Function ID: 8276
// Dependencies: [8276, 8274]

// Module 8275
import _modDef8274 from "module_8274" /* 8274 */;
import _modDef8276 from "module_8276" /* 8276 */;


export default {
  isTiffFile(byteLength) {
    let tmp = byteLength && byteLength.byteLength >= 4;
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === _modDef8276.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef8274.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};
