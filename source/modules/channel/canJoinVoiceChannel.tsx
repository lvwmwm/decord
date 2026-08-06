// Module ID: 5116
// Function ID: 5117
// Name: canJoinVoiceChannel
// Dependencies: [1376, 676, 2]
// Exports: default

// Module 5116 (canJoinVoiceChannel)
import { isPrivate } from "createChannelRecord";
import { BasicPermissions } from "ME";

const result = require("set").fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};
