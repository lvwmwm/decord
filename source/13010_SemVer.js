// Module ID: 13010
// Function ID: 13011
// Name: SemVer
// Dependencies: [12993]

// Module 13010 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12993) /* SemVer */(arg0, arg2);
  const tmp = new require(12993) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
