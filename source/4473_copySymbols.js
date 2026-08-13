// Module ID: 4473
// Function ID: 4474
// Name: copySymbols
// Dependencies: [4466, 795]

// Module 4473 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4466) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
