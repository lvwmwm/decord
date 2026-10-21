// Module ID: 6674
// Function ID: 6675
// Name: SecondaryIndexMapUtils
// Dependencies: [1357, 2]
// Exports: isVersionEqual

// Module 6674 (SecondaryIndexMapUtils)
import _modDef1357 from "module_1357" /* 1357 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export const isVersionEqual = function isVersionEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const tmp5 = tmp2 === tmp4 && _modDef1357(tmp, tmp3);
  return tmp5;
};
