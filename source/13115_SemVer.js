// Module ID: 13115
// Function ID: 13116
// Name: SemVer
// Dependencies: [13116]

// Module 13115 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13116) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13116) /* SemVer */(arg0, arg1);
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
