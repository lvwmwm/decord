// Module ID: 6409
// Function ID: 6410
// Name: canJoinVoiceChannel
// Dependencies: [4766, 1071, 2]
// Exports: default

// Module 6409 (canJoinVoiceChannel)
import Constants from "Constants" /* 1071 */;
import ChannelRecord from "ChannelRecord" /* 4766 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
