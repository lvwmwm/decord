// Module ID: 13181
// Function ID: 13182
// Name: SemVer
// Dependencies: [13182]

// Module 13181 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13182) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13182) /* SemVer */(arg0, arg1);
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
