// Module ID: 6624
// Function ID: 6625
// Name: canJoinVoiceChannel
// Dependencies: [4825, 1087, 2]
// Exports: default

// Module 6624 (canJoinVoiceChannel)
import Constants from "Constants" /* 1087 */;
import ChannelRecord from "ChannelRecord" /* 4825 */;
import size from "module_2" /* 2 */;

const isPrivate = ChannelRecord.isPrivate;
const BasicPermissions = Constants.BasicPermissions;
const result = size.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  const canBasicChannelResult = isPrivate(type.type) || canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  return canBasicChannelResult;
};
