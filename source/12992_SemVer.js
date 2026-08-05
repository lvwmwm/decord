// Module ID: 12992
// Function ID: 12993
// Name: SemVer
// Dependencies: [12993]

// Module 12992 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(12993) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(12993) /* SemVer */(arg0, arg1);
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
