// Module ID: 4753
// Function ID: 41240
// Dependencies: []

// Module 4753
arg5.default = {
  isAvifFile(getUint32) {
    if (getUint32) {
      const parseBoxResult = arg1(arg6[0]).parseBox(getUint32, 0);
      let tmp5 = parseBoxResult;
      if (parseBoxResult) {
        tmp5 = "avif" === parseBoxResult.majorBrand;
      }
      return tmp5;
    } else {
      return false;
    }
  },
  findAvifOffsets(byteLength) {
    return arg1(arg6[0]).findOffsets(byteLength);
  }
};
