// Module ID: 13182
// Function ID: 13183
// Name: SemVer
// Dependencies: [13183]

// Module 13182 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13183) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13183) /* SemVer */(arg0, arg1);
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
