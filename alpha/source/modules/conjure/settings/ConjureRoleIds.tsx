// Module ID: 12185
// Function ID: 12186
// Name: ConjureRoleIds
// Dependencies: [2]
// Exports: haveSameRoleIds

// Module 12185 (ConjureRoleIds)
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/conjure/settings/ConjureRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first1, roleIds) {
  set = new Set(first1);
  const tmp2 = set.size === roleIds.length && roleIds.every((item) => set.has(item));
  return tmp2;
};
