// Module ID: 11607
// Function ID: 11608
// Name: parseReactionPermissions
// Dependencies: [2]
// Exports: default

// Module 11607 (parseReactionPermissions)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/parseReactionPermissions.tsx");

export default function parseReactionPermissions(arg0) {
  ({ channel, canChat, isLurking, isActiveChannelOrUnarchivableThread, renderReactions, canAddNewReactions, communicationDisabled, isAutomodQuarantined } = arg0);
  const isPrivateResult = channel.isPrivate();
  const isMediaThreadResult = channel.isMediaThread();
  if (!canChat) {
    canChat = isPrivateResult;
  }
  if (canChat) {
    canChat = isActiveChannelOrUnarchivableThread;
  }
  if (canChat) {
    canChat = !isMediaThreadResult;
  }
  const obj = { disableReactionReads: !renderReactions, disableReactionCreates: null, disableReactionUpdates: null };
  let tmp4 = isLurking;
  if (!isLurking) {
    tmp4 = !canChat;
  }
  if (!tmp4) {
    tmp4 = !((true === canAddNewReactions || isPrivateResult) && !isSystemDMResult && isActiveChannelOrUnarchivableThread && !isMediaThreadResult);
    const tmp5 = (true === canAddNewReactions || isPrivateResult) && !isSystemDMResult && isActiveChannelOrUnarchivableThread && !isMediaThreadResult;
  }
  obj.disableReactionCreates = tmp4;
  if (!isLurking) {
    isLurking = !canChat;
  }
  if (!isLurking) {
    isLurking = true === communicationDisabled;
  }
  if (!isLurking) {
    isLurking = true === isAutomodQuarantined;
  }
  obj.disableReactionUpdates = isLurking;
  return obj;
};
