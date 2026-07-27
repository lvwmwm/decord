// Module ID: 4255
// Function ID: 37366
// Name: copySymbols
// Dependencies: [4248, 772]

// Module 4255 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4248) /* copyObject */(arg0, require(772) /* getOwnPropertySymbols */(arg0), arg1);
};
