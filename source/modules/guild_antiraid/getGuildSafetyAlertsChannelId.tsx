// Module ID: 10273
// Function ID: 79323
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 10273 (getGuildSafetyAlertsChannelId)
const result = require("set").fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (null == publicUpdatesChannelId) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
