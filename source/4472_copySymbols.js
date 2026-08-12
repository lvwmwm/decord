// Module ID: 4472
// Function ID: 4473
// Name: copySymbols
// Dependencies: [4465, 795]

// Module 4472 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4465) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
