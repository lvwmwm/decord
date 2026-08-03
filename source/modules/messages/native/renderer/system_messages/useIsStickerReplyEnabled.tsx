// Module ID: 7902
// Function ID: 7903
// Name: computeIsStickerReplyEnabled
// Dependencies: [1942, 3883, 1874, 676, 5769, 2]
// Exports: computeIsStickerReplyEnabled

// Module 7902 (computeIsStickerReplyEnabled)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Permissions } from "ME";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx");

export const computeIsStickerReplyEnabled = function computeIsStickerReplyEnabled(guildId, channel, message, arg3) {
  currentUser = currentUser.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    member = member.getMember(guildId, currentUser.id);
    let isPending;
    if (member != null) {
      isPending = member.isPending;
    }
    tmp2 = isPending;
  }
  const isReadOnlyThread = require(5769) /* useCanUnarchiveThread */.computeIsReadOnlyThread(channel);
  let canResult = getUncachedChannelPermissions.can(Permissions.SEND_MESSAGES, channel);
  if (canResult) {
    canResult = !isReadOnlyThread;
  }
  if (canResult) {
    canResult = !tmp2;
  }
  if (canResult) {
    canResult = !message.author.bot;
  }
  if (canResult) {
    canResult = arg3;
  }
  return canResult;
};
