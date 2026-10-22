// Module ID: 8342
// Function ID: 8343
// Name: useIsStickerReplyEnabled
// Dependencies: [4881, 4901, 1392, 1087, 7353, 2]
// Exports: computeIsStickerReplyEnabled

// Module 8342 (useIsStickerReplyEnabled)
import Constants from "Constants" /* 1087 */;
import ThreadHooks from "ThreadHooks" /* 7353 */;
import GuildMemberStore from "GuildMemberStore" /* 4881 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import UserStore from "UserStore" /* 1392 */;
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
