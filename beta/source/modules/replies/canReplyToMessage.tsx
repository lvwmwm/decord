// Module ID: 8239
// Function ID: 8240
// Name: canReplyToMessage
// Dependencies: [32, 4399, 1376, 1078, 1089, 1094, 558, 568, 7513, 8240, 504, 2]
// Exports: canReplyToMessage

// Module 8239 (canReplyToMessage)
import MessageTypes from "MessageTypes" /* 1094 */;
import ThreadHooks from "ThreadHooks" /* 7513 */;
import useUserCommunicationDisabled from "useUserCommunicationDisabled" /* 8240 */;
import _slicedToArray from "module_32" /* 32 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1078);
({ MessageFlags: hasOwnProperty, MessageStates: metroRequire } = Constants);
const Permissions = fn(1089).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/replies/canReplyToMessage.tsx");

export const useCanReplyToMessage = ReactCompilerGating.isReactCompilerEnabled() ? ((getGuildId, hasFlag) => {
  _require = getGuildId;
  dependencyMap = hasFlag;
  const cResult = require("c").c(12);
  const obj = require("c");
  const canUnarchiveThread = require("ThreadHooks").useCanUnarchiveThread(getGuildId);
  if (cResult[0] !== getGuildId) {
    let guildId;
    if (getGuildId != null) {
      guildId = getGuildId.getGuildId();
    }
    cResult[0] = getGuildId;
    cResult[1] = guildId;
    let tmp5 = guildId;
  } else {
    tmp5 = cResult[1];
  }
  const obj2 = require("ThreadHooks");
  const tmp8 = _slicedToArray(require("useUserCommunicationDisabled").useCurrentUserCommunicationDisabled(tmp5), 2)[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[2] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === getGuildId) {
    if (cResult[4] === hasFlag) {
      let tmp11 = cResult[5];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp9, tmp11);
    if (!(null != getGuildId && null != hasFlag)) {
      return tmp14;
    } else {
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === canUnarchiveThread) {
          if (cResult[8] === getGuildId) {
            if (cResult[9] === tmp8) {
            }
          }
        }
      }
      const isArchivedThreadResult = getGuildId.isArchivedThread();
      let tmp20 = !isArchivedThreadResult;
      if (isArchivedThreadResult) {
        tmp20 = canUnarchiveThread;
      }
      let tmp21 = stateFromStores;
      if (stateFromStores) {
        tmp21 = hasFlag.state === constants2.SENT;
      }
      if (tmp21) {
        tmp21 = !hasFlagResult;
      }
      if (tmp21) {
        tmp21 = !tmp8;
      }
      if (tmp21) {
        tmp21 = tmp20;
      }
      cResult[6] = stateFromStores;
      cResult[7] = canUnarchiveThread;
      cResult[8] = getGuildId;
      cResult[9] = tmp8;
      cResult[10] = hasFlag;
      cResult[11] = tmp21;
      hasFlagResult = hasFlag.hasFlag(constants.EPHEMERAL);
    }
    const tmpResult2 = tmp(504);
  }
  const fn = function v() {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null != closure_1;
    }
    if (tmp) {
      if (obj.isPrivate()) {
        let hasItem = !obj.isSystemDM();
      } else {
        hasItem = obj2.can(Permissions.SEND_MESSAGES, obj) && obj2.can(Permissions.READ_MESSAGE_HISTORY, obj);
      }
      if (hasItem) {
        const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(tmp3.type);
      }
      tmp = hasItem;
      tmp3 = closure_1;
    }
    return tmp;
  };
  cResult[3] = getGuildId;
  cResult[4] = hasFlag;
  cResult[5] = fn;
  tmp11 = fn;
}) : ((getGuildId, hasFlag) => {
  _require = getGuildId;
  dependencyMap = hasFlag;
  const canUnarchiveThread = require("ThreadHooks").useCanUnarchiveThread(getGuildId);
  const obj = require("ThreadHooks");
  let tmp = _require;
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const obj2 = require("useUserCommunicationDisabled");
  const items = [PermissionStore];
  let stateFromStores = tmp(504).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      tmp = null != closure_1;
    }
    if (tmp) {
      if (obj.isPrivate()) {
        let hasItem = !obj.isSystemDM();
      } else {
        hasItem = obj2.can(Permissions.SEND_MESSAGES, obj) && obj2.can(Permissions.READ_MESSAGE_HISTORY, obj);
      }
      if (hasItem) {
        const REPLYABLE = MessageTypes.MessageTypesSets.REPLYABLE;
        hasItem = REPLYABLE.has(tmp3.type);
      }
      tmp = hasItem;
      tmp3 = closure_1;
    }
    return tmp;
  });
  let tmp6 = null != getGuildId && null != hasFlag;
  if (tmp6) {
    const isArchivedThreadResult = getGuildId.isArchivedThread();
    let tmp11 = !isArchivedThreadResult;
    if (isArchivedThreadResult) {
      tmp11 = canUnarchiveThread;
    }
    if (stateFromStores) {
      stateFromStores = hasFlag.state === constants2.SENT;
    }
    if (stateFromStores) {
      stateFromStores = !hasFlagResult;
    }
    if (stateFromStores) {
      stateFromStores = !_slicedToArray(obj2.useCurrentUserCommunicationDisabled(guildId), 2)[1];
    }
    if (stateFromStores) {
      stateFromStores = tmp11;
    }
    tmp6 = stateFromStores;
    hasFlagResult = hasFlag.hasFlag(constants.EPHEMERAL);
  }
  return tmp6;
});
export const canReplyToMessage = function canReplyToMessage(isPrivate, type) {
  if (isPrivate.isPrivate()) {
    let hasItem = !isPrivate.isSystemDM();
  } else {
    hasItem = obj2.can(Permissions.SEND_MESSAGES, isPrivate) && obj2.can(Permissions.READ_MESSAGE_HISTORY, isPrivate);
  }
  if (hasItem) {
    const REPLYABLE = tmp(1094).MessageTypesSets.REPLYABLE;
    hasItem = REPLYABLE.has(type.type);
  }
  const currentUser = UserStore.getCurrentUser();
  const canUnarchiveThreadResult = ThreadHooks.canUnarchiveThread(isPrivate);
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  const guildId = isPrivate.getGuildId();
  const tmpResult = useUserCommunicationDisabled;
  const isArchivedThreadResult = isPrivate.isArchivedThread();
  let tmp11 = !isArchivedThreadResult;
  if (isArchivedThreadResult) {
    tmp11 = canUnarchiveThreadResult;
  }
  if (hasItem) {
    hasItem = type.state === constants2.SENT;
  }
  if (hasItem) {
    hasItem = !hasFlagResult;
  }
  if (hasItem) {
    hasItem = !_slicedToArray(tmpResult.userCommunicationDisabled(id, guildId), 2)[1];
  }
  if (hasItem) {
    hasItem = tmp11;
  }
  return hasItem;
};
