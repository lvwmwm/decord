// Module ID: 13133
// Function ID: 13134
// Name: SemVer
// Dependencies: [13116]

// Module 13133 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13116) /* SemVer */(arg0, arg2);
  const tmp = new require(13116) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
