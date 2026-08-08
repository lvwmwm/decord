// Module ID: 4432
// Function ID: 4433
// Name: copySymbols
// Dependencies: [4425, 795]

// Module 4432 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4425) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
