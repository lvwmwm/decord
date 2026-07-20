// Module ID: 4749
// Function ID: 41207
// Dependencies: []

// Module 4749
arg5.default = {
  isHeicFile(getUint32) {
    if (getUint32) {
      const parseBoxResult = arg1(arg6[0]).parseBox(getUint32, 0);
      let tmp5 = parseBoxResult;
      if (parseBoxResult) {
        const items = [];
        tmp5 = -1 !== items.indexOf(parseBoxResult.majorBrand);
      }
      return tmp5;
    } else {
      return false;
    }
  },
  findHeicOffsets(byteLength) {
    return arg1(arg6[0]).findOffsets(byteLength);
  }
};
