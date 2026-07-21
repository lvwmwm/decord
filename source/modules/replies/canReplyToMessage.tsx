// Module ID: 7657
// Function ID: 61226
// Name: hasReplyPermission
// Dependencies: []
// Exports: canReplyToMessage, useCanReplyToMessage

// Module 7657 (hasReplyPermission)
function hasReplyPermission(isPrivate, type, closure_3) {
  if (isPrivate.isPrivate()) {
    let canResult = !isPrivate.isSystemDM();
  } else {
    canResult = closure_3.can(Permissions.SEND_MESSAGES, isPrivate);
    if (canResult) {
      canResult = closure_3.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
    }
  }
  if (canResult) {
    const REPLYABLE = type(dependencyMap[5]).MessageTypesSets.REPLYABLE;
    canResult = REPLYABLE.has(type.type);
  }
  return canResult;
}
function _canReplyToMessage(isArchivedThread, hasFlag, stateFromStores, arg3, canUnarchiveThread) {
  let tmp = stateFromStores;
  const hasFlagResult = hasFlag.hasFlag(constants.EPHEMERAL);
  const tmp3 = hasFlag.state === constants2.SENT;
  if (tmp) {
    tmp = tmp3;
  }
  if (tmp) {
    tmp = !hasFlagResult;
  }
  if (tmp) {
    tmp = !arg3;
  }
  if (tmp) {
    tmp = tmp4;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ MessageFlags: closure_5, MessageStates: closure_6 } = arg1(dependencyMap[3]));
const Permissions = arg1(dependencyMap[4]).Permissions;
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = function useCanReplyToMessage(stateFromStores, message) {
  message = stateFromStores;
  const dependencyMap = message;
  const canUnarchiveThread = message(dependencyMap[6]).useCanUnarchiveThread(stateFromStores);
  const obj = message(dependencyMap[6]);
  let guildId;
  if (null != stateFromStores) {
    guildId = stateFromStores.getGuildId();
  }
  let tmp3;
  if (null != guildId) {
    tmp3 = guildId;
  }
  const tmp4 = callback(message(dependencyMap[7]).useCurrentUserCommunicationDisabled(tmp3), 2)[1];
  const obj2 = message(dependencyMap[7]);
  const items = [closure_3];
  stateFromStores = message(dependencyMap[8]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = null != arg1;
    }
    if (tmp) {
      tmp = callback(arg0, arg1, closure_3);
    }
    return tmp;
  });
  let tmp6 = null != stateFromStores && null != message;
  if (tmp6) {
    tmp6 = _canReplyToMessage(stateFromStores, message, stateFromStores, tmp4, canUnarchiveThread);
  }
  return tmp6;
};
export const canReplyToMessage = function canReplyToMessage(channel, message) {
  const obj = message(dependencyMap[6]);
  const canUnarchiveThreadResult = message(dependencyMap[6]).canUnarchiveThread(channel);
  const currentUser = currentUser.getCurrentUser();
  const tmp2 = hasReplyPermission(channel, message, closure_3);
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  const guildId = channel.getGuildId();
  let tmp6;
  if (null != guildId) {
    tmp6 = guildId;
  }
  return _canReplyToMessage(channel, message, tmp2, callback(message(dependencyMap[7]).userCommunicationDisabled(id, tmp6), 2)[1], canUnarchiveThreadResult);
};
