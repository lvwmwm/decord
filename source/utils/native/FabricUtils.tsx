// Module ID: 4086
// Function ID: 4087
// Name: isFabric
// Dependencies: [4087, 2]
// Exports: isFabric

// Module 4086 (isFabric)
const result = require("set").fileFinishedImporting("utils/native/FabricUtils.tsx");

export const isFabric = function isFabric() {
  const obj = importDefault(4087);
  let flag;
  if (obj != null) {
    flag = obj.isFabric();
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
