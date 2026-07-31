// Module ID: 12939
// Function ID: 12940
// Name: SemVer
// Dependencies: [12925]

// Module 12939 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12925) /* SemVer */(arg0, arg2);
  return obj.compare(new require(12925) /* SemVer */(arg1, arg2));
};
