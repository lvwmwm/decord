// Module ID: 8099
// Function ID: 8100
// Dependencies: [8100, 8098]

// Module 8099
import _modDef8098 from "module_8098" /* 8098 */;
import _modDef8100 from "module_8100" /* 8100 */;


export default {
  isTiffFile(byteLength) {
    let tmp = byteLength && byteLength.byteLength >= 4;
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === _modDef8100.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef8098.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};
