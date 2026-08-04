// Module ID: 4413
// Function ID: 4414
// Name: copySymbols
// Dependencies: [4406, 795]

// Module 4413 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4406) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
