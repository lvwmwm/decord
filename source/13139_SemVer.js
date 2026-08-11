// Module ID: 13139
// Function ID: 13140
// Name: SemVer
// Dependencies: [13125]

// Module 13139 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13125) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13125) /* SemVer */(arg1, arg2));
};
