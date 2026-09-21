// Module ID: 8260
// Function ID: 8261
// Name: useIsStickerReplyEnabled
// Dependencies: [2109, 4399, 1376, 1078, 7513, 2]
// Exports: computeIsStickerReplyEnabled

// Module 8260 (useIsStickerReplyEnabled)
import ThreadHooks from "ThreadHooks" /* 7513 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import PermissionStore from "PermissionStore" /* 4399 */;
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
