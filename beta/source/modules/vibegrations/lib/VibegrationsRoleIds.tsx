// Module ID: 16264
// Function ID: 16265
// Name: VibegrationsRoleIds
// Dependencies: [2]
// Exports: haveSameRoleIds

// Module 16264 (VibegrationsRoleIds)
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first2, prop) {
  set = first2;
  if (!(first2 instanceof Set)) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(first2);
  }
  const tmp3 = set.size === prop.length && prop.every((item) => set.has(item));
  return tmp3;
};
