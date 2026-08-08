// Module ID: 13113
// Function ID: 13114
// Name: SemVer
// Dependencies: [13114]

// Module 13113 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13114) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13114) /* SemVer */(arg0, arg1);
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
