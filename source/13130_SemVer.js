// Module ID: 13130
// Function ID: 13131
// Name: SemVer
// Dependencies: [13116]

// Module 13130 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13116) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13116) /* SemVer */(arg1, arg2));
};
