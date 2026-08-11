// Module ID: 13124
// Function ID: 13125
// Name: SemVer
// Dependencies: [13125]

// Module 13124 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13125) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13125) /* SemVer */(arg0, arg1);
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
