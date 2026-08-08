// Module ID: 9775
// Function ID: 9776
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 9775 (getGuildSafetyAlertsChannelId)
const result = require("set").fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
