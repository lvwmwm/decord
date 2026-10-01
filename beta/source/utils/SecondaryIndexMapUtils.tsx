// Module ID: 5744
// Function ID: 5745
// Name: SecondaryIndexMapUtils
// Dependencies: [1331, 2]
// Exports: isVersionEqual

// Module 5744 (SecondaryIndexMapUtils)
import _modDef1331 from "module_1331" /* 1331 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export const isVersionEqual = function isVersionEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const tmp5 = tmp2 === tmp4 && _modDef1331(tmp, tmp3);
  return tmp5;
};
