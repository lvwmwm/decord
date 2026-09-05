// Module ID: 7997
// Function ID: 7998
// Name: computeIsStickerReplyEnabled
// Dependencies: [2021, 4199, 1371, 1074, 7269, 2]
// Exports: computeIsStickerReplyEnabled

// Module 7997 (computeIsStickerReplyEnabled)
import useCanStartPrivateThread from "useCanStartPrivateThread" /* 7269 */;
import closure_2 from "trackCommunicationDisabled" /* 2021 */;
import closure_3 from "getUncachedChannelPermissions" /* 4199 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import { Permissions } from "ME" /* 1074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx");

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
  const isReadOnlyThread = useCanStartPrivateThread.computeIsReadOnlyThread(channel);
  let canResult = closure_3.can(Permissions.SEND_MESSAGES, channel);
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
