// Module ID: 7752
// Function ID: 61559
// Name: hasReplyPermission
// Dependencies: [57, 3758, 1849, 653, 482, 663, 5650, 7753, 566, 2]
// Exports: canReplyToMessage, useCanReplyToMessage

// Module 7752 (hasReplyPermission)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";
import { Permissions } from "sum";

let closure_5;
let closure_6;
const require = arg1;
function hasReplyPermission(isPrivate, type, _isNativeReflectConstruct) {
  if (isPrivate.isPrivate()) {
    let canResult = !isPrivate.isSystemDM();
  } else {
    canResult = _isNativeReflectConstruct.can(Permissions.SEND_MESSAGES, isPrivate);
    if (canResult) {
      canResult = _isNativeReflectConstruct.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
    }
  }
  if (canResult) {
    const REPLYABLE = require(663) /* set */.MessageTypesSets.REPLYABLE;
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
({ MessageFlags: closure_5, MessageStates: closure_6 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = function useCanReplyToMessage(stateFromStores, message) {
  const _require = stateFromStores;
  const dependencyMap = message;
  const canUnarchiveThread = _require(5650).useCanUnarchiveThread(stateFromStores);
  const obj = _require(5650);
  let guildId;
  if (null != stateFromStores) {
    guildId = stateFromStores.getGuildId();
  }
  let tmp3;
  if (null != guildId) {
    tmp3 = guildId;
  }
  const tmp4 = callback(_require(7753).useCurrentUserCommunicationDisabled(tmp3), 2)[1];
  const obj2 = _require(7753);
  const items = [_isNativeReflectConstruct];
  stateFromStores = _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null != closure_1;
    }
    if (tmp) {
      tmp = outer1_8(closure_0, closure_1, outer1_3);
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
  const obj = require(5650) /* useCanStartPublicThread */;
  const canUnarchiveThreadResult = require(5650) /* useCanStartPublicThread */.canUnarchiveThread(channel);
  currentUser = currentUser.getCurrentUser();
  const tmp2 = hasReplyPermission(channel, message, _isNativeReflectConstruct);
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  const guildId = channel.getGuildId();
  let tmp6;
  if (null != guildId) {
    tmp6 = guildId;
  }
  return _canReplyToMessage(channel, message, tmp2, callback(require(7753) /* getUserGuildMember */.userCommunicationDisabled(id, tmp6), 2)[1], canUnarchiveThreadResult);
};
