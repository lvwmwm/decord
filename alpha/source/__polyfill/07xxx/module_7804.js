// Module ID: 7804
// Function ID: 7805
// Dependencies: [7805, 7803]

// Module 7804
import _modDef7803 from "module_7803" /* 7803 */;
import _modDef7805 from "module_7805" /* 7805 */;


export default {
  isTiffFile(byteLength) {
    let tmp = byteLength && byteLength.byteLength >= 4;
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === _modDef7805.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef7803.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};
