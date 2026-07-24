// Module ID: 4949
// Function ID: 42439
// Name: canJoinVoiceChannel
// Dependencies: [1352, 653, 2]
// Exports: default

// Module 4949 (canJoinVoiceChannel)
import { isPrivate } from "_callSuper";
import { BasicPermissions } from "ME";

const result = require("set").fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};
