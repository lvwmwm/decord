// Module ID: 4318
// Function ID: 4319
// Name: copySymbols
// Dependencies: [4311, 795]

// Module 4318 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4311) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
