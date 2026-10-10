// Module ID: 5957
// Function ID: 5958
// Name: SecondaryIndexMapUtils
// Dependencies: [1355, 2]
// Exports: isVersionEqual

// Module 5957 (SecondaryIndexMapUtils)
import _modDef1355 from "module_1355" /* 1355 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export const isVersionEqual = function isVersionEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const tmp5 = tmp2 === tmp4 && _modDef1355(tmp, tmp3);
  return tmp5;
};
