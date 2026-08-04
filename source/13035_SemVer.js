// Module ID: 13035
// Function ID: 13036
// Name: SemVer
// Dependencies: [13021]

// Module 13035 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13021) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13021) /* SemVer */(arg1, arg2));
};
