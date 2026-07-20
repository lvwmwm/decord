// Module ID: 7673
// Function ID: 61304
// Name: computeIsStickerReplyEnabled
// Dependencies: []
// Exports: computeIsStickerReplyEnabled

// Module 7673 (computeIsStickerReplyEnabled)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx");

export const computeIsStickerReplyEnabled = function computeIsStickerReplyEnabled(guildId, channel, message, arg3) {
  const currentUser = currentUser.getCurrentUser();
  let tmp2 = null != currentUser;
  if (tmp2) {
    const member = member.getMember(guildId, currentUser.id);
    let isPending;
    if (null != member) {
      isPending = member.isPending;
    }
    tmp2 = isPending;
  }
  const isReadOnlyThread = channel(dependencyMap[4]).computeIsReadOnlyThread(channel);
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
