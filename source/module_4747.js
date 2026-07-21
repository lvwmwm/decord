// Module ID: 4747
// Function ID: 41216
// Dependencies: []

// Module 4747
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
      return { "Bool(true)": "rules", "Bool(true)": "message" };
    } else {
      return {};
    }
  }
};
