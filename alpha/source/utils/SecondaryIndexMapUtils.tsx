// Module ID: 6950
// Function ID: 6951
// Name: SecondaryIndexMapUtils
// Dependencies: [1345, 2]
// Exports: isVersionEqual

// Module 6950 (SecondaryIndexMapUtils)
import _modDef1345 from "module_1345" /* 1345 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/SecondaryIndexMapUtils.tsx");

export function isVersionEqual(arg0, arg1) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  [tmp, tmp2] = arg0;
  [tmp3, tmp4] = arg1;
  const tmp5 = tmp2 === tmp4 && _modDef1345(tmp, tmp3);
  return tmp5;
}
