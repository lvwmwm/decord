// Module ID: 5531
// Function ID: 5532
// Dependencies: [5532, 5530]

// Module 5531
import _modDef5530 from "module_5530" /* 5530 */;
import _modDef5532 from "module_5532" /* 5532 */;


export default {
  isTiffFile(byteLength) {
    let tmp = byteLength && byteLength.byteLength >= 4;
    if (tmp) {
      const uint16 = byteLength.getUint16(0);
      tmp = byteLength.getUint16(2, uint16 === _modDef5532.LITTLE_ENDIAN) === 42;
    }
    return tmp;
  },
  findTiffOffsets() {
    if (_modDef5530.USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};
