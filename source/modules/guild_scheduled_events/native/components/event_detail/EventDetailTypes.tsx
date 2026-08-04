// Module ID: 9068
// Function ID: 9069
// Name: isRemainingUsersGroup
// Dependencies: [2]
// Exports: isRemainingUsersGroup

// Module 9068 (isRemainingUsersGroup)
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailTypes.tsx");

export const isRemainingUsersGroup = function isRemainingUsersGroup(item) {
  return undefined !== item.count;
};
