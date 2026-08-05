// Module ID: 4383
// Function ID: 4384
// Name: copySymbols
// Dependencies: [4376, 795]

// Module 4383 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4376) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
