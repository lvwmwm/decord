// Module ID: 6110
// Function ID: 6111
// Name: canJoinVoiceChannel
// Dependencies: [2069, 1085, 2]
// Exports: default

// Module 6110 (canJoinVoiceChannel)
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2069 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
