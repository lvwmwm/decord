// Module ID: 12899
// Function ID: 12900
// Name: SemVer
// Dependencies: [12900]

// Module 12899 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(12900) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(12900) /* SemVer */(arg0, arg1);
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
