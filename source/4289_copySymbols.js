// Module ID: 4289
// Function ID: 37478
// Name: copySymbols
// Dependencies: [4282, 772]

// Module 4289 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4282) /* copyObject */(arg0, require(772) /* getOwnPropertySymbols */(arg0), arg1);
};
