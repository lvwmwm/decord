// Module ID: 12919
// Function ID: 12920
// Name: SemVer
// Dependencies: [12905]

// Module 12919 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12905) /* SemVer */(arg0, arg2);
  return obj.compare(new require(12905) /* SemVer */(arg1, arg2));
};
