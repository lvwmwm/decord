// Module ID: 13047
// Function ID: 13048
// Name: SemVer
// Dependencies: [13030]

// Module 13047 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13030) /* SemVer */(arg0, arg2);
  const tmp = new require(13030) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
