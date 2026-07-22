// Module ID: 4946
// Function ID: 42417
// Name: canJoinVoiceChannel
// Dependencies: []
// Exports: default

// Module 4946 (canJoinVoiceChannel)
const isPrivate = require(dependencyMap[0]).isPrivate;
const BasicPermissions = require(dependencyMap[1]).BasicPermissions;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};
