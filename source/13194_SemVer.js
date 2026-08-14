// Module ID: 13194
// Function ID: 13195
// Name: SemVer
// Dependencies: [13195]

// Module 13194 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13195) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13195) /* SemVer */(arg0, arg1);
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
