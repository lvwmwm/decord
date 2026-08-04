// Module ID: 13038
// Function ID: 13039
// Name: SemVer
// Dependencies: [13021]

// Module 13038 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13021) /* SemVer */(arg0, arg2);
  const tmp = new require(13021) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
