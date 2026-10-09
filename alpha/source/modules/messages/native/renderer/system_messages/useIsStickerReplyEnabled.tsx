// Module ID: 7997
// Function ID: 7998
// Name: useIsStickerReplyEnabled
// Dependencies: [2124, 4709, 1390, 1085, 6965, 2]
// Exports: computeIsStickerReplyEnabled

// Module 7997 (useIsStickerReplyEnabled)
import Constants from "Constants" /* 1085 */;
import ThreadHooks from "ThreadHooks" /* 6965 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
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
  const obj = ThreadHooks;
  const isReadOnlyThread = obj.computeIsReadOnlyThread(channel);
  let canResult = PermissionStore.can(Permissions.SEND_MESSAGES, channel);
  const bot = message.author.bot;
  if (canResult) {
    canResult = !isReadOnlyThread;
  }
  if (canResult) {
    canResult = !tmp2;
  }
  if (canResult) {
    canResult = !bot;
  }
  if (canResult) {
    canResult = arg3;
  }
  return canResult;
};
