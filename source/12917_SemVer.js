// Module ID: 12917
// Function ID: 12918
// Name: SemVer
// Dependencies: [12900]

// Module 12917 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12900) /* SemVer */(arg0, arg2);
  const tmp = new require(12900) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
