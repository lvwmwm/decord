// Module ID: 12254
// Function ID: 95639
// Name: isRemainingUsersGroup
// Dependencies: [2]
// Exports: isRemainingUsersGroup

// Module 12254 (isRemainingUsersGroup)
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailTypes.tsx");

export const isRemainingUsersGroup = function isRemainingUsersGroup(item) {
  return undefined !== item.count;
};
