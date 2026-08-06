// Module ID: 9069
// Function ID: 9070
// Name: isRemainingUsersGroup
// Dependencies: [2]
// Exports: isRemainingUsersGroup

// Module 9069 (isRemainingUsersGroup)
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailTypes.tsx");

export const isRemainingUsersGroup = function isRemainingUsersGroup(item) {
  return undefined !== item.count;
};
