// Module ID: 9932
// Function ID: 9933
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 9932 (getGuildSafetyAlertsChannelId)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
