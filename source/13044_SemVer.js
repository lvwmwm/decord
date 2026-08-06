// Module ID: 13044
// Function ID: 13045
// Name: SemVer
// Dependencies: [13030]

// Module 13044 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13030) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13030) /* SemVer */(arg1, arg2));
};
