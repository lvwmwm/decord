// Module ID: 7831
// Function ID: 7832
// Dependencies: [7832, 7830]

// Module 7831
import _modDef7830 from "module_7830" /* 7830 */;
import _modDef7832 from "module_7832" /* 7832 */;


export default {
  isTiffFile(byteLength) {
    let tmp = byteLength && byteLength.byteLength >= 4;
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === _modDef7832.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef7830.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};
