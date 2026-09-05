// Module ID: 10102
// Function ID: 10103
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 10102 (getGuildSafetyAlertsChannelId)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
