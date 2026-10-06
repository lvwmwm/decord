// Module ID: 5580
// Function ID: 5581
// Name: canJoinVoiceChannel
// Dependencies: [2055, 1085, 2]
// Exports: default

// Module 5580 (canJoinVoiceChannel)
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
