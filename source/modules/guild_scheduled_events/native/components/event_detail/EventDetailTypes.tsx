// Module ID: 12272
// Function ID: 12273
// Name: isRemainingUsersGroup
// Dependencies: [2]
// Exports: isRemainingUsersGroup

// Module 12272 (isRemainingUsersGroup)
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailTypes.tsx");

export const isRemainingUsersGroup = function isRemainingUsersGroup(item) {
  return undefined !== item.count;
};
