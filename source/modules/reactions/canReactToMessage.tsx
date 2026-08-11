// Module ID: 8080
// Function ID: 8081
// Name: canReactToMessageInternal
// Dependencies: [1990, 5131, 3948, 1922, 676, 1403, 3937, 589, 2]
// Exports: canReactToMessage, useCanReactToMessage

// Module 8080 (canReactToMessageInternal)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import recomputeGuild from "recomputeGuild";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c9;
let closure_6;
let error;
let metroImportAll;
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
    if (currentUser != null) {
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
    canResult = !require(1403) /* hasFlag */.hasFlag(state.flags, constants4.EPHEMERAL);
    const obj5 = require(1403) /* hasFlag */;
  }
  if (canResult) {
    canResult = !require(3937) /* isCommunicationDisabled */.isMemberCommunicationDisabled(member);
    const obj6 = require(3937) /* isCommunicationDisabled */;
  }
  return canResult;
}
({ Permissions: closure_6, MessageStates: error, MessageTypes: metroImportAll, MessageFlags: c9 } = ME);
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/reactions/canReactToMessage.tsx");

export const canReactToMessage = function canReactToMessage(message, channel) {
  const items = [mergeGuildAvatar, trackCommunicationDisabled, recomputeGuild, getUncachedChannelPermissions];
  return canReactToMessageInternal(message, channel, items);
};
export const useCanReactToMessage = function useCanReactToMessage(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  let items = [mergeGuildAvatar, trackCommunicationDisabled, recomputeGuild, getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => {
    const items = [outer1_5, outer1_2, outer1_3, outer1_4];
    return outer1_10(closure_0, closure_1, items);
  });
};
