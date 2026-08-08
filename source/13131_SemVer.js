// Module ID: 13131
// Function ID: 13132
// Name: SemVer
// Dependencies: [13114]

// Module 13131 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13114) /* SemVer */(arg0, arg2);
  const tmp = new require(13114) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
