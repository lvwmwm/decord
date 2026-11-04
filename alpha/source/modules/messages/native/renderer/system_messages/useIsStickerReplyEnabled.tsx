// Module ID: 8595
// Function ID: 8596
// Name: useIsStickerReplyEnabled
// Dependencies: [5053, 5073, 1385, 1072, 7583, 2]
// Exports: computeIsStickerReplyEnabled

// Module 8595 (useIsStickerReplyEnabled)
import Constants from "Constants" /* 1072 */;
import ThreadHooks from "ThreadHooks" /* 7583 */;
import GuildMemberStore from "GuildMemberStore" /* 5053 */;
import PermissionStore from "PermissionStore" /* 5073 */;
import UserStore from "UserStore" /* 1385 */;
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
