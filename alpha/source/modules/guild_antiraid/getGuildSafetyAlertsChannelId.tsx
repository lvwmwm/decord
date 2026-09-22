// Module ID: 10364
// Function ID: 10365
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 10364 (getGuildSafetyAlertsChannelId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
