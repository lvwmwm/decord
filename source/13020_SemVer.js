// Module ID: 13020
// Function ID: 13021
// Name: SemVer
// Dependencies: [13021]

// Module 13020 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13021) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13021) /* SemVer */(arg0, arg1);
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
