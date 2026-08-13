// Module ID: 13200
// Function ID: 13201
// Name: SemVer
// Dependencies: [13183]

// Module 13200 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13183) /* SemVer */(arg0, arg2);
  const tmp = new require(13183) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
