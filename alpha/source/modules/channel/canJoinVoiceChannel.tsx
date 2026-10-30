// Module ID: 6705
// Function ID: 6706
// Name: canJoinVoiceChannel
// Dependencies: [4862, 1072, 2]
// Exports: default

// Module 6705 (canJoinVoiceChannel)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
