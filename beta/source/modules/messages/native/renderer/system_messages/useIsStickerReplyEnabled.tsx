// Module ID: 9226
// Function ID: 9227
// Name: useIsStickerReplyEnabled
// Dependencies: [5218, 5238, 1388, 1072, 7287, 2]
// Exports: computeIsStickerReplyEnabled

// Module 9226 (useIsStickerReplyEnabled)
import Constants from "Constants" /* 1072 */;
import ThreadHooks from "ThreadHooks" /* 7287 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx");

export function computeIsStickerReplyEnabled(guildId, channel, message, arg3) {
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
}
