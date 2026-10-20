// Module ID: 12583
// Function ID: 12584
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 12583 (getGuildSafetyAlertsChannelId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
