// Module ID: 8233
// Function ID: 8234
// Name: useIsStickerReplyEnabled
// Dependencies: [2125, 4806, 1390, 1085, 7190, 2]
// Exports: computeIsStickerReplyEnabled

// Module 8233 (useIsStickerReplyEnabled)
import Constants from "Constants" /* 1085 */;
import ThreadHooks from "ThreadHooks" /* 7190 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import PermissionStore from "PermissionStore" /* 4806 */;
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
