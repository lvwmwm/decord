// Module ID: 13039
// Function ID: 13040
// Name: SemVer
// Dependencies: [13022]

// Module 13039 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13022) /* SemVer */(arg0, arg2);
  const tmp = new require(13022) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
