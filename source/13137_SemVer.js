// Module ID: 13137
// Function ID: 13138
// Name: SemVer
// Dependencies: [13123]

// Module 13137 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13123) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13123) /* SemVer */(arg1, arg2));
};
