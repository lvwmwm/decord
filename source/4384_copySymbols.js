// Module ID: 4384
// Function ID: 4385
// Name: copySymbols
// Dependencies: [4377, 795]

// Module 4384 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4377) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
