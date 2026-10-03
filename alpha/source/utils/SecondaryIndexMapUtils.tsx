// Module ID: 5589
// Function ID: 5590
// Name: SecondaryIndexMapUtils
// Dependencies: [1342, 2]
// Exports: isVersionEqual

// Module 5589 (SecondaryIndexMapUtils)
import _modDef1342 from "module_1342" /* 1342 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export const isVersionEqual = function isVersionEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const tmp5 = tmp2 === tmp4 && _modDef1342(tmp, tmp3);
  return tmp5;
};
