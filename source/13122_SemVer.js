// Module ID: 13122
// Function ID: 13123
// Name: SemVer
// Dependencies: [13123]

// Module 13122 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13123) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13123) /* SemVer */(arg0, arg1);
      return tmp8;
    } catch (tmp10) {
      if (tmp) {
        throw tmp10;
      } else {
        return null;
      }
    }
  }
};
