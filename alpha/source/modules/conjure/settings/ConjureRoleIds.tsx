// Module ID: 11335
// Function ID: 11336
// Name: ConjureRoleIds
// Dependencies: [2]
// Exports: haveSameRoleIds

// Module 11335 (ConjureRoleIds)
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/conjure/settings/ConjureRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first1, roleIds) {
  set = first1;
  if (!(first1 instanceof Set)) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(first1);
  }
  const tmp3 = set.size === roleIds.length && roleIds.every((item) => set.has(item));
  return tmp3;
};
