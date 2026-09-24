// Module ID: 16968
// Function ID: 16969
// Name: VibegrationsRoleIds
// Dependencies: [2]
// Exports: haveSameRoleIds

// Module 16968 (VibegrationsRoleIds)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRoleIds.tsx");

export const haveSameRoleIds = function haveSameRoleIds(first2, prop) {
  let set = first2;
  if (!(first2 instanceof Set)) {
    const _Set = Set;
    set = new Set(first2);
  }
  return set.size === prop.length && prop.every((item) => set.has(item));
};
