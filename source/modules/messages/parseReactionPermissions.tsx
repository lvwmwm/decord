// Module ID: 10340
// Function ID: 79814
// Name: parseReactionPermissions
// Dependencies: []
// Exports: default

// Module 10340 (parseReactionPermissions)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/messages/parseReactionPermissions.tsx");

export default function parseReactionPermissions(arg0) {
  let canAddNewReactions;
  let canChat;
  let channel;
  let communicationDisabled;
  let isActiveChannelOrUnarchivableThread;
  let isAutomodQuarantined;
  let isLurking;
  let renderReactions;
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
  const obj = { disableReactionReads: !renderReactions };
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
