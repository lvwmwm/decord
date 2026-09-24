// Module ID: 5667
// Function ID: 5668
// Name: canJoinVoiceChannel
// Dependencies: [2049, 1078, 2]
// Exports: default

// Module 5667 (canJoinVoiceChannel)
import Constants from "Constants" /* 1078 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
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
