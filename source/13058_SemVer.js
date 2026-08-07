// Module ID: 13058
// Function ID: 13059
// Name: SemVer
// Dependencies: [13044]

// Module 13058 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13044) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13044) /* SemVer */(arg1, arg2));
};
