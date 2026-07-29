// Module ID: 12922
// Function ID: 12923
// Name: SemVer
// Dependencies: [12905]

// Module 12922 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12905) /* SemVer */(arg0, arg2);
  const tmp = new require(12905) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
