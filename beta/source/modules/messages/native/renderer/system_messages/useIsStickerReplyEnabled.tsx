// Module ID: 8292
// Function ID: 8293
// Name: useIsStickerReplyEnabled
// Dependencies: [2109, 4431, 1376, 1078, 7545, 2]
// Exports: computeIsStickerReplyEnabled

// Module 8292 (useIsStickerReplyEnabled)
import ThreadHooks from "ThreadHooks" /* 7545 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const Permissions = fn(1078).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx");

export const computeIsStickerReplyEnabled = function computeIsStickerReplyEnabled(guildId, channel, message, arg3) {
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    const member = GuildMemberStore.getMember(guildId, currentUser.id);
    let isPending;
    if (member != null) {
      isPending = member.isPending;
    }
    tmp2 = isPending;
  }
  const isReadOnlyThread = ThreadHooks.computeIsReadOnlyThread(channel);
  let canResult = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
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
