// Module ID: 12089
// Function ID: 93226
// Name: isRemainingUsersGroup
// Dependencies: [284214097]
// Exports: isRemainingUsersGroup

// Module 12089 (isRemainingUsersGroup)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/guild_scheduled_events/native/components/event_detail/EventDetailTypes.tsx");

export const isRemainingUsersGroup = function isRemainingUsersGroup(item) {
  return undefined !== item.count;
};
