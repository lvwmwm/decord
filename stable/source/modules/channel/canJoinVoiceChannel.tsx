// Module ID: 5497
// Function ID: 5498
// Name: canJoinVoiceChannel
// Dependencies: [1961, 1074, 2]
// Exports: default

// Module 5497 (canJoinVoiceChannel)
import Constants from "Constants" /* 1074 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};
