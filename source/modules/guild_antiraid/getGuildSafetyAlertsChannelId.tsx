// Module ID: 10231
// Function ID: 79060
// Name: getGuildSafetyAlertsChannelId
// Dependencies: []
// Exports: default

// Module 10231 (getGuildSafetyAlertsChannelId)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (null == publicUpdatesChannelId) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
