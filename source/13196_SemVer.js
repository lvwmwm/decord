// Module ID: 13196
// Function ID: 13197
// Name: SemVer
// Dependencies: [13182]

// Module 13196 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13182) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13182) /* SemVer */(arg1, arg2));
};
