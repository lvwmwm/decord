// Module ID: 4322
// Function ID: 4323
// Name: copySymbols
// Dependencies: [4315, 795]

// Module 4322 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4315) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
