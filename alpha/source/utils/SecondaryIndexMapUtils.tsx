// Module ID: 6753
// Function ID: 6754
// Name: SecondaryIndexMapUtils
// Dependencies: [1354, 2]
// Exports: isVersionEqual

// Module 6753 (SecondaryIndexMapUtils)
import _modDef1354 from "module_1354" /* 1354 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export function isVersionEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const tmp5 = tmp2 === tmp4 && _modDef1354(tmp, tmp3);
  return tmp5;
}
