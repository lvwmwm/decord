// Module ID: 13061
// Function ID: 13062
// Name: SemVer
// Dependencies: [13044]

// Module 13061 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13044) /* SemVer */(arg0, arg2);
  const tmp = new require(13044) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
