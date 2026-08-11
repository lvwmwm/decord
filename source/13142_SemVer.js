// Module ID: 13142
// Function ID: 13143
// Name: SemVer
// Dependencies: [13125]

// Module 13142 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13125) /* SemVer */(arg0, arg2);
  const tmp = new require(13125) /* SemVer */(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
