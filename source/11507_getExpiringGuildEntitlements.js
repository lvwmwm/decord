// Module ID: 11507
// Function ID: 89705
// Name: getExpiringGuildEntitlements
// Dependencies: []
// Exports: getExpiringGuildEntitlements

// Module 11507 (getExpiringGuildEntitlements)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/premium/powerups/utils/getExpiringGuildEntitlements.tsx");

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
