// Module ID: 4745
// Function ID: 41175
// Dependencies: []

// Module 4745
arg5.default = {
  isTiffFile(byteLength) {
    let tmp2 = !tmp;
    if (!!byteLength) {
      tmp2 = byteLength.byteLength >= 4;
    }
    if (tmp2) {
      const uint16 = byteLength.getUint16(0);
      tmp2 = byteLength.getUint16(2, uint16 === arg2(arg6[0]).LITTLE_ENDIAN) === 42;
    }
    return tmp2;
  },
  findTiffOffsets() {
    if (arg2(arg6[1]).USE_EXIF) {
      return { minOffsetX: 0, maxDeltaY: 0 };
    } else {
      return {};
    }
  }
};
