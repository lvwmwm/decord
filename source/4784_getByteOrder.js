// Module ID: 4784
// Function ID: 41382
// Name: getByteOrder
// Dependencies: [4785, 4783]

// Module 4784 (getByteOrder)
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  isTiffFile(byteLength) {
    let tmp2 = !tmp;
    if (!!byteLength) {
      tmp2 = byteLength.byteLength >= 4;
    }
    if (tmp2) {
      const uint16 = byteLength.getUint16(0);
      tmp2 = byteLength.getUint16(2, uint16 === module(4785).LITTLE_ENDIAN) === 42;
    }
    return tmp2;
  },
  findTiffOffsets() {
    if (module(4783).USE_EXIF) {
      return { hasAppMarkers: true, tiffHeaderOffset: 0 };
    } else {
      return {};
    }
  }
};
