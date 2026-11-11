// Module ID: 6765
// Function ID: 6766
// Name: canJoinVoiceChannel
// Dependencies: [5096, 1072, 2]
// Exports: default

// Module 6765 (canJoinVoiceChannel)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 5096 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
