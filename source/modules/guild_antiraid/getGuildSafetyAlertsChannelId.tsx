// Module ID: 10230
// Function ID: 79036
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [284214097]
// Exports: default

// Module 10230 (getGuildSafetyAlertsChannelId)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (null == publicUpdatesChannelId) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
