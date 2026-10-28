// Module ID: 8389
// Function ID: 8390
// Name: useIsStickerReplyEnabled
// Dependencies: [4915, 4935, 1392, 1087, 7401, 2]
// Exports: computeIsStickerReplyEnabled

// Module 8389 (useIsStickerReplyEnabled)
import Constants from "Constants" /* 1087 */;
import ThreadHooks from "ThreadHooks" /* 7401 */;
import GuildMemberStore from "GuildMemberStore" /* 4915 */;
import PermissionStore from "PermissionStore" /* 4935 */;
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
