// Module ID: 4254
// Function ID: 37353
// Name: copySymbols
// Dependencies: [4247, 772]

// Module 4254 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4247) /* copyObject */(arg0, require(772) /* getOwnPropertySymbols */(arg0), arg1);
};
