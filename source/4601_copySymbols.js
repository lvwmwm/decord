// Module ID: 4601
// Function ID: 4602
// Name: copySymbols
// Dependencies: [4594, 795]

// Module 4601 (copySymbols)

export default function copySymbols(arg0, arg1) {
  return require(4594) /* copyObject */(arg0, require(795) /* getOwnPropertySymbols */(arg0), arg1);
};
