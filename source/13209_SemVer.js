// Module ID: 13209
// Function ID: 13210
// Name: SemVer
// Dependencies: [13195]

// Module 13209 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(13195) /* SemVer */(arg0, arg2);
  return obj.compare(new require(13195) /* SemVer */(arg1, arg2));
};
