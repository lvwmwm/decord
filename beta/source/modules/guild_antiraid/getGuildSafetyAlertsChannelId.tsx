// Module ID: 11184
// Function ID: 11185
// Name: getGuildSafetyAlertsChannelId
// Dependencies: [2]
// Exports: default

// Module 11184 (getGuildSafetyAlertsChannelId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_antiraid/getGuildSafetyAlertsChannelId.tsx");

export default function getGuildSafetyAlertsChannelId(safetyAlertsChannelId) {
  let publicUpdatesChannelId = safetyAlertsChannelId.safetyAlertsChannelId;
  if (publicUpdatesChannelId == null) {
    publicUpdatesChannelId = safetyAlertsChannelId.publicUpdatesChannelId;
  }
  return publicUpdatesChannelId;
};
