// Module ID: 12692
// Function ID: 12693
// Name: getExpiringGuildEntitlements
// Dependencies: [2]
// Exports: getExpiringGuildEntitlements

// Module 12692 (getExpiringGuildEntitlements)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/utils/getExpiringGuildEntitlements.tsx");

export const getExpiringGuildEntitlements = function getExpiringGuildEntitlements(items) {
  const found = items.filter((ends_at) => null != ends_at.ends_at);
  return found.sort((ends_at, ends_at2) => {
    let num = 1;
    if (ends_at.ends_at < ends_at2.ends_at) {
      num = -1;
    }
    return num;
  });
};
