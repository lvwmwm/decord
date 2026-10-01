// Module ID: 7418
// Function ID: 7419
// Name: canReplyToMessage
// Dependencies: [32, 4469, 1372, 1074, 1085, 1090, 6687, 7419, 504, 2]
// Exports: canReplyToMessage, useCanReplyToMessage

// Module 7418 (canReplyToMessage)
import Constants2 from "Constants" /* 1085 */;
import MessageTypes from "MessageTypes" /* 1090 */;
import ThreadHooks from "ThreadHooks" /* 6687 */;
import useUserCommunicationDisabled from "useUserCommunicationDisabled" /* 7419 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroRequire;
({ MessageFlags: hasOwnProperty, MessageStates: metroRequire } = Constants);
const Permissions = Constants2.Permissions;
const result = size.fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = function useCanReplyToMessage(channel, message) {
  _require = channel;
  dependencyMap = message;
  let tmp = _require;
  const obj = require("ThreadHooks");
  const canUnarchiveThread = obj.useCanUnarchiveThread(channel);
  const tmp4 = require("useUserCommunicationDisabled");
  let guildId;
  const useCurrentUserCommunicationDisabled = tmp4.useCurrentUserCommunicationDisabled;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  const items = [PermissionStore];
  const tmp6 = _slicedToArray(useCurrentUserCommunicationDisabled(guildId), 2)[1];
  const tmpResult = tmp(504);
  let stateFromStores = tmpResult.useStateFromStores(items, () => {
    let tmp = null != channel && null != message;
    if (tmp) {
      let hasItem;
      const tmp3 = message;
      if (channel.isPrivate()) {
        hasItem = !obj.isSystemDM();
      } else {
        hasItem = obj2.can(Permissions.SEND_MESSAGES, obj) && obj2.can(Permissions.READ_MESSAGE_HISTORY, obj);
      }
      if (hasItem) {
        const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(tmp3.type);
      }
      tmp = hasItem;
    }
    return tmp;
  });
  let tmp8 = null != channel && null != message;
  if (tmp8) {
    const state = message.state;
    const SENT = constants2.SENT;
    const hasFlagResult = message.hasFlag(constants.EPHEMERAL);
    const isArchivedThreadResult = channel.isArchivedThread();
    let tmp13 = !isArchivedThreadResult;
    if (isArchivedThreadResult) {
      tmp13 = canUnarchiveThread;
    }
    if (stateFromStores) {
      stateFromStores = state === SENT;
    }
    if (stateFromStores) {
      stateFromStores = !hasFlagResult;
    }
    if (stateFromStores) {
      stateFromStores = !tmp6;
    }
    if (stateFromStores) {
      stateFromStores = tmp13;
    }
    tmp8 = stateFromStores;
  }
  return tmp8;
};
export const canReplyToMessage = function canReplyToMessage(isPrivate, type) {
  let hasItem;
  const obj = ThreadHooks;
  const canUnarchiveThreadResult = obj.canUnarchiveThread(isPrivate);
  if (isPrivate.isPrivate()) {
    hasItem = !isPrivate.isSystemDM();
  } else {
    hasItem = obj2.can(Permissions.SEND_MESSAGES, isPrivate) && obj2.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
  }
  if (hasItem) {
    const REPLYABLE = tmp(1090).MessageTypesSets.REPLYABLE;
    hasItem = REPLYABLE.has(type.type);
  }
  const currentUser = UserStore.getCurrentUser();
  let id;
  const userCommunicationDisabled = useUserCommunicationDisabled.userCommunicationDisabled;
  useUserCommunicationDisabled;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const guildId = isPrivate.getGuildId();
  const state = type.state;
  const SENT = metroRequire.SENT;
  const tmp10 = _slicedToArray(userCommunicationDisabled(id, guildId), 2)[1];
  const hasFlagResult = type.hasFlag(hasOwnProperty.EPHEMERAL);
  const isArchivedThreadResult = isPrivate.isArchivedThread();
  let tmp13 = !isArchivedThreadResult;
  if (isArchivedThreadResult) {
    tmp13 = canUnarchiveThreadResult;
  }
  if (hasItem) {
    hasItem = state === SENT;
  }
  if (hasItem) {
    hasItem = !hasFlagResult;
  }
  if (hasItem) {
    hasItem = !tmp10;
  }
  if (hasItem) {
    hasItem = tmp13;
  }
  return hasItem;
};
