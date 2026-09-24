// Module ID: 5683
// Function ID: 5684
// Name: SecondaryIndexMapUtils
// Dependencies: [1335, 2]
// Exports: isVersionEqual

// Module 5683 (SecondaryIndexMapUtils)
import _modDef1335 from "module_1335" /* 1335 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export const isVersionEqual = function isVersionEqual(arg0, arg1) {
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  let tmp5 = tmp2 === tmp4;
  if (tmp5) {
    tmp5 = _modDef1335(tmp, tmp3);
  }
  return tmp5;
};
