// Module ID: 6640
// Function ID: 6641
// Name: canJoinVoiceChannel
// Dependencies: [4828, 1084, 2]
// Exports: default

// Module 6640 (canJoinVoiceChannel)
import Constants from "Constants" /* 1084 */;
import ChannelRecord from "ChannelRecord" /* 4828 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
