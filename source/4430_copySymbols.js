// Module ID: 4430
// Function ID: 4431
// Name: copySymbols
// Dependencies: [4423, 795]

// Module 4430 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4423) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
