// Module ID: 11853
// Function ID: 11854
// Name: getExpiringGuildEntitlements
// Dependencies: [2]
// Exports: getExpiringGuildEntitlements

// Module 11853 (getExpiringGuildEntitlements)
const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/getExpiringGuildEntitlements.tsx");

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
