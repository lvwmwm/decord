// Module ID: 7747
// Function ID: 61541
// Name: canReactToMessageInternal
// Dependencies: [1917, 4946, 3758, 1849, 653, 1360, 3747, 566, 2]
// Exports: canReactToMessage, useCanReactToMessage

// Module 7747 (canReactToMessageInternal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function canReactToMessageInternal(state, getGuildId, items) {
  let obj;
  let obj2;
  let obj3;
  let obj4;
  [obj, obj2, obj3, obj4] = items;
  const guildId = getGuildId.getGuildId();
  const currentUser = obj.getCurrentUser();
  let member = null;
  if (null != guildId) {
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    member = null;
    if (null != id) {
      member = obj2.getMember(guildId, currentUser.id);
    }
  }
  let canResult = null != guildId && obj3.canChatInGuild(guildId);
  if (canResult) {
    canResult = obj4.can(constants.ADD_REACTIONS, getGuildId);
  }
  if (!canResult) {
    canResult = getGuildId.isPrivate();
  }
  if (canResult) {
    canResult = !getGuildId.isArchivedLockedThread();
  }
  if (canResult) {
    canResult = state.state !== constants2.SEND_FAILED;
  }
  if (canResult) {
    canResult = state.type !== constants3.THREAD_STARTER_MESSAGE;
  }
  if (canResult) {
    canResult = !require(1360) /* hasFlag */.hasFlag(state.flags, constants4.EPHEMERAL);
    const obj5 = require(1360) /* hasFlag */;
  }
  if (canResult) {
    canResult = !require(3747) /* isCommunicationDisabled */.isMemberCommunicationDisabled(member);
    const obj6 = require(3747) /* isCommunicationDisabled */;
  }
  return canResult;
}
({ Permissions: closure_6, MessageStates: closure_7, MessageTypes: closure_8, MessageFlags: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [closure_5, _isNativeReflectConstruct, closure_3, closure_4];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = function useCanReactToMessage(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [closure_5, _isNativeReflectConstruct, closure_3, closure_4];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_5, outer1_2, outer1_3, outer1_4];
    return outer1_10(closure_0, closure_1, items);
  });
};
