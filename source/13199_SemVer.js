// Module ID: 13199
// Function ID: 13200
// Name: SemVer
// Dependencies: [13182]

// Module 13199 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13182) /* SemVer */(arg0, arg2);
  const tmp = new require(13182) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
