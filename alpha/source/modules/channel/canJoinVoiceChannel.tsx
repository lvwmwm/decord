// Module ID: 6779
// Function ID: 6780
// Name: canJoinVoiceChannel
// Dependencies: [4865, 1071, 2]
// Exports: default

// Module 6779 (canJoinVoiceChannel)
import Constants from "Constants" /* 1071 */;
import ChannelRecord from "ChannelRecord" /* 4865 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
