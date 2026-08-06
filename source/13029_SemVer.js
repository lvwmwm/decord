// Module ID: 13029
// Function ID: 13030
// Name: SemVer
// Dependencies: [13030]

// Module 13029 (SemVer)

export default (arg0, arg1) => {
  if (arg0 instanceof require(13030) /* SemVer */) {
    return arg0;
  } else {
    try {
      const tmp8 = new require(13030) /* SemVer */(arg0, arg1);
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
