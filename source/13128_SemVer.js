// Module ID: 13128
// Function ID: 13129
// Name: SemVer
// Dependencies: [13114]

// Module 13128 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13114) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13114) /* SemVer */(arg1, arg2));
};
