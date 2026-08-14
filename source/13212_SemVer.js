// Module ID: 13212
// Function ID: 13213
// Name: SemVer
// Dependencies: [13195]

// Module 13212 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13195) /* SemVer */(arg0, arg2);
  const tmp = new require(13195) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
