// Module ID: 5890
// Function ID: 5891
// Name: canJoinVoiceChannel
// Dependencies: [2067, 1085, 2]
// Exports: default

// Module 5890 (canJoinVoiceChannel)
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2067 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
