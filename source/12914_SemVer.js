// Module ID: 12914
// Function ID: 12915
// Name: SemVer
// Dependencies: [12900]

// Module 12914 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12900) /* SemVer */(arg0, arg2);
  return obj.compare(new require(12900) /* SemVer */(arg1, arg2));
};
