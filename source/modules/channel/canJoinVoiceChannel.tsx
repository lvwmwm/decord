// Module ID: 4992
// Function ID: 4993
// Name: canJoinVoiceChannel
// Dependencies: [1395, 676, 2]
// Exports: default

// Module 4992 (canJoinVoiceChannel)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;

const isPrivate = createChannelRecord.isPrivate;
const BasicPermissions = ME.BasicPermissions;
const result = set.fileFinishedImporting("modules/channel/canJoinVoiceChannel.tsx");

export default function canJoinVoiceChannel(type, canBasicChannel) {
  let canBasicChannelResult = isPrivate(type.type);
  if (!canBasicChannelResult) {
    canBasicChannelResult = canBasicChannel.canBasicChannel(BasicPermissions.CONNECT | BasicPermissions.VIEW_CHANNEL, type);
  }
  return canBasicChannelResult;
};
