// Module ID: 13140
// Function ID: 13141
// Name: SemVer
// Dependencies: [13123]

// Module 13140 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13123) /* SemVer */(arg0, arg2);
  const tmp = new require(13123) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
