// Module ID: 6710
// Function ID: 52173
// Name: isPrivateChannel
// Dependencies: []
// Exports: isPrivateChannel

// Module 6710 (isPrivateChannel)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/app_database/modules/messages/isPrivateChannel.tsx");

export const isPrivateChannel = function isPrivateChannel(basicChannel) {
  return null == basicChannel.guild_id;
};
