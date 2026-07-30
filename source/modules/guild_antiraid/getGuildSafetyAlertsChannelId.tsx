// Module ID: 10264
// Function ID: 10265
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 10264 (getGuildSafetyAlertsChannelId)
const result = require("set").fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
