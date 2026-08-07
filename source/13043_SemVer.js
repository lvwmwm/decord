// Module ID: 13043
// Function ID: 13044
// Name: SemVer
// Dependencies: [13044]

// Module 13043 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13044) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13044) /* SemVer */(arg0, arg1);
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
