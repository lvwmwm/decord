// Module ID: 13002
// Function ID: 13003
// Name: SemVer
// Dependencies: [12988]

// Module 13002 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12988) /* SemVer */(arg0, arg2);
  return obj.compare(new require(12988) /* SemVer */(arg1, arg2));
};
