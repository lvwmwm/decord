// Module ID: 13197
// Function ID: 13198
// Name: SemVer
// Dependencies: [13183]

// Module 13197 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13183) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13183) /* SemVer */(arg1, arg2));
};
