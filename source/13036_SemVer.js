// Module ID: 13036
// Function ID: 13037
// Name: SemVer
// Dependencies: [13022]

// Module 13036 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13022) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13022) /* SemVer */(arg1, arg2));
};
