// Module ID: 4750
// Function ID: 41255
// Dependencies: []

// Module 4750
arg5.default = {
  isHeicFile(getUint32) {
    if (getUint32) {
      const parseBoxResult = arg1(arg6[0]).parseBox(getUint32, 0);
      let tmp5 = parseBoxResult;
      if (parseBoxResult) {
        const items = [-978714620, -978649084, -978583548, -430833660, 1102858192, 306805, 1098182993, 291942, -1147388072];
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
