// Module ID: 13007
// Function ID: 13008
// Name: SemVer
// Dependencies: [12993]

// Module 13007 (SemVer)

export default (arg0, arg1, arg2) => {
  const obj = new require(12993) /* SemVer */(arg0, arg2);
  return obj.compare(new require(12993) /* SemVer */(arg1, arg2));
};
