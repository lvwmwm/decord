// Module ID: 18288
// Function ID: 18289
// Name: ConjureRoleIds
// Dependencies: [2]
// Exports: haveSameRoleIds

// Module 18288 (ConjureRoleIds)
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/conjure/settings/ConjureRoleIds.tsx");

export function haveSameRoleIds(first1, roleIds) {
  set = new Set(first1);
  const tmp2 = set.size === roleIds.length && roleIds.every((item) => set.has(item));
  return tmp2;
}
