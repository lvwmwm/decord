// Module ID: 13021
// Function ID: 13022
// Name: SemVer
// Dependencies: [13022]

// Module 13021 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13022) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13022) /* SemVer */(arg0, arg1);
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
