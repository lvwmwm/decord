// Module ID: 5650
// Function ID: 48296
// Name: useCanStartPublicThread
// Dependencies: [57, 4043, 1352, 1194, 1348, 3758, 5039, 653, 566, 483, 5651, 21, 22, 5652, 5653, 4345, 2]
// Exports: computeCanStartPrivateThread, computeCanStartPublicThread, computeIsReadOnlyThread, getIsActiveChannelOrUnarchivableThread, isNonModInLockedThread, useCanJoinThreadVoice, useCanManageThread, useCanRemoveThreadMember, useCanStartThread, useCanViewThreadForMessage, useHasActiveThreads, useIsNonModInLockedThread

// Module 5650 (useCanStartPublicThread)
import _slicedToArray from "_slicedToArray";
import { THREADED_CHANNEL_TYPES } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "getExperimentDescriptor";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function useCanStartPublicThread(parentChannel, hasFlag) {
  const _require = parentChannel;
  const items = [closure_8];
  const items1 = [parentChannel];
  return canStartThread(_require(566).useStateFromStores(items, () => {
    if (parentChannel.isForumLikeChannel()) {
      let SEND_MESSAGES = outer1_10.SEND_MESSAGES;
    } else {
      SEND_MESSAGES = outer1_2(outer1_3[9]).combine(outer1_10.CREATE_PUBLIC_THREADS, outer1_10.READ_MESSAGE_HISTORY);
      const obj = outer1_2(outer1_3[9]);
    }
    return outer1_8.can(SEND_MESSAGES, parentChannel);
  }, items1), parentChannel, hasFlag);
}
function useCanStartPrivateThread(type) {
  const _require = type;
  _require(566);
  [][0] = type;
  let tmp3 = type.type === constants3.GUILD_TEXT;
  if (tmp3) {
    tmp3 = canStartThread(tmp2, type);
  }
  return tmp3;
}
function canStartThread(closure_8, type, hasFlag) {
  if (closure_8) {
    if (THREADED_CHANNEL_TYPES.has(type.type)) {
      if (null != hasFlag) {
        if (hasFlag.hasFlag(constants2.HAS_THREAD)) {
          return false;
        } else if (importDefault(5651)(hasFlag)) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function hasSendPermission(stateFromStores, closure_8) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = closure_8.can(constants.SEND_MESSAGES_IN_THREADS, stateFromStores);
  }
  return canResult;
}
function _canUnarchiveThread(isThread) {
  let tmp2 = !(null == isThread || !isThread.isThread() || isThread.isMediaThread());
  if (tmp2) {
    const threadMetadata = isThread.threadMetadata;
    let tmp3 = arg1;
    if (null != threadMetadata) {
      tmp3 = arg1;
      if (threadMetadata.locked) {
        tmp3 = arg2;
      }
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function useCanUnarchiveThread(channel) {
  const _require = channel;
  const items = [closure_8];
  let stateFromStores = _require(566).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_8.can(outer1_10.SEND_MESSAGES_IN_THREADS, closure_0);
    }
    if (canResult) {
      canResult = outer1_8.can(outer1_10.SEND_MESSAGES, closure_0);
    }
    return canResult;
  });
  const obj = _require(566);
  const items1 = [closure_8, closure_7];
  const items2 = [channel];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    let channel = null;
    if (null != parent_id) {
      channel = outer1_7.getChannel(parent_id.parent_id);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_8.can(outer1_10.SEND_MESSAGES_IN_THREADS, parent_id);
    }
    if (canResult) {
      canResult = outer1_8.can(outer1_10.SEND_MESSAGES, channel);
    }
    return canResult;
  }, items2);
  const obj2 = _require(566);
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  return _canUnarchiveThread(channel, stateFromStores, useIsThreadModerator(channel));
}
function canUnarchiveThread(stateFromStores) {
  let tmpResult = hasSendPermission(stateFromStores, closure_8);
  let channel = null;
  if (null != stateFromStores) {
    channel = channel.getChannel(stateFromStores.parent_id);
  }
  if (tmpResult) {
    tmpResult = hasSendPermission(channel, closure_8);
  }
  return _canUnarchiveThread(stateFromStores, tmpResult, isThreadModerator(stateFromStores));
}
function useIsActiveChannelOrUnarchivableThread(stateFromStores) {
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    let tmp3 = !stateFromStores.isThread() || stateFromStores.isActiveThread();
    if (!tmp3) {
      let isArchivedThreadResult = stateFromStores.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = stateFromStores.threadMetadata;
        let locked;
        if (null != threadMetadata) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = tmp;
      }
      tmp3 = isArchivedThreadResult;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function useIsThreadModerator(channel) {
  const _require = channel;
  let items = [closure_8];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_8];
    return outer1_23(closure_0, items);
  });
}
function isThreadModerator(closure_0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_8];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  let canResult = null != closure_0;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, closure_0);
  }
  return canResult;
}
function useHasPermissionToJoinThreadVoice(channel) {
  const _require = channel;
  const items = [closure_8];
  let stateFromStores = _require(566).useStateFromStores(items, () => outer1_8.can(outer1_10.CONNECT, closure_0));
  if (stateFromStores) {
    stateFromStores = useIsActiveChannelOrUnarchivableThread(channel);
  }
  return stateFromStores;
}
({ Permissions: closure_10, MessageFlags: closure_11, ChannelTypes: closure_12 } = ME);
let obj = { id: "2022-07_voice_in_threads", label: "Voice in Threads", kind: "guild", defaultConfig: { enabled: false } };
obj = { id: 1, label: "On", config: { enabled: true } };
let items = [obj];
obj.treatments = items;
const importDefaultResultResult = require("getExperimentDescriptor")(obj);
const result = require("_callSuper").fileFinishedImporting("modules/threads/ThreadHooks.tsx");

export const VoiceInThreadsExperiment = importDefaultResultResult;
export { useCanStartPublicThread };
export const computeCanStartPublicThread = function computeCanStartPublicThread(channel, message) {
  if (channel.isForumLikeChannel()) {
    let SEND_MESSAGES = constants.SEND_MESSAGES;
  } else {
    SEND_MESSAGES = importAll(483).combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
    const obj = importAll(483);
  }
  return canStartThread(closure_8.can(SEND_MESSAGES, channel), channel, message);
};
export { useCanStartPrivateThread };
export const computeCanStartPrivateThread = function computeCanStartPrivateThread(channel, hasFlag) {
  return canStartThread(closure_8.can(constants.CREATE_PRIVATE_THREADS, channel), channel, hasFlag);
};
export const useCanStartThread = function useCanStartThread(channel) {
  let tmp = useCanStartPublicThread(channel);
  if (!tmp) {
    tmp = useCanStartPrivateThread(channel);
  }
  return tmp;
};
export const useCanViewThreadForMessage = function useCanViewThreadForMessage(hasFlag) {
  const _require = hasFlag;
  const items = [closure_7];
  const items1 = [hasFlag];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_7.getChannel(stateFromStores(outer1_3[11]).castMessageIdAsChannelId(hasFlag.id)), items1);
  const obj = _require(566);
  const items2 = [closure_8];
  const items3 = [stateFromStores];
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => outer1_8.can(outer1_10.VIEW_CHANNEL, stateFromStores), items3);
  const tmp3 = !hasFlag.hasFlag(constants2.HAS_THREAD);
  let tmp4 = !tmp3;
  if (!tmp3) {
    tmp4 = null != stateFromStores && stateFromStores1;
    const tmp6 = null != stateFromStores && stateFromStores1;
  }
  return tmp4;
};
export const useHasActiveThreads = function useHasActiveThreads(channel) {
  const _require = channel;
  const items = [closure_9, closure_8];
  return _require(566).useStateFromStoresObject(items, () => {
    const activeJoinedThreadsForParent = outer1_9.getActiveJoinedThreadsForParent(activeJoinedRelevantThreadsForParent.guild_id, activeJoinedRelevantThreadsForParent.id);
    activeJoinedRelevantThreadsForParent = outer1_9.getActiveJoinedRelevantThreadsForParent(activeJoinedRelevantThreadsForParent.guild_id, activeJoinedRelevantThreadsForParent.id);
    const activeUnjoinedThreadsForParent = outer1_9.getActiveUnjoinedThreadsForParent(activeJoinedRelevantThreadsForParent.guild_id, activeJoinedRelevantThreadsForParent.id);
    let obj = outer1_1(outer1_3[12])(activeJoinedRelevantThreadsForParent);
    let someResult = obj.some((channel) => outer2_8.can(outer2_10.VIEW_CHANNEL, channel.channel));
    const someResult1 = outer1_1(outer1_3[12])(activeJoinedThreadsForParent).some((channel) => {
      let canResult = !tmp;
      if (!(channel.channel.id in activeJoinedRelevantThreadsForParent)) {
        canResult = outer2_8.can(outer2_10.VIEW_CHANNEL, channel.channel);
      }
      return canResult;
    });
    const obj2 = outer1_1(outer1_3[12])(activeJoinedThreadsForParent);
    let someResult2 = outer1_1(outer1_3[12])(activeUnjoinedThreadsForParent).some((channel) => outer2_8.can(outer2_10.VIEW_CHANNEL, channel));
    obj = {};
    if (!someResult) {
      someResult = someResult1;
    }
    if (!someResult) {
      someResult = someResult2;
    }
    obj.hasActiveThreads = someResult;
    if (!someResult2) {
      someResult2 = someResult1;
    }
    obj.hasMoreActiveThreads = someResult2;
    return obj;
  });
};
export const useCanManageThread = function useCanManageThread(channel) {
  const _require = channel;
  const items = [closure_7];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let parent_id;
    if (null != parent_id) {
      parent_id = parent_id.parent_id;
    }
    return outer1_7.getChannel(parent_id);
  });
  const obj = _require(566);
  const items1 = [closure_8];
  const items2 = [stateFromStores];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = outer1_8.can(outer1_10.MANAGE_THREADS, stateFromStores);
    }
    return canResult;
  }, items2);
  const obj2 = _require(566);
  const items3 = [_isNativeReflectConstruct];
  let tmp4 = null != channel;
  const stateFromStores2 = _require(566).useStateFromStores(items3, () => outer1_6.getId());
  if (tmp4) {
    tmp4 = null != stateFromStores;
  }
  if (tmp4) {
    const tmp5 = !channel.isThread();
    let tmp6 = !tmp5;
    if (!tmp5) {
      let tmp8 = !tmp7;
      if (!stateFromStores1) {
        tmp8 = !channel.isLockedThread() && channel.ownerId === stateFromStores2;
        const tmp9 = !channel.isLockedThread() && channel.ownerId === stateFromStores2;
      }
      tmp6 = tmp8;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};
export { useCanUnarchiveThread };
export { canUnarchiveThread };
export { useIsActiveChannelOrUnarchivableThread };
export const getIsActiveChannelOrUnarchivableThread = function getIsActiveChannelOrUnarchivableThread(channel) {
  let tmp = null != channel;
  if (tmp) {
    let tmp2 = !channel.isThread() || channel.isActiveThread();
    if (!tmp2) {
      let isArchivedThreadResult = channel.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = channel.threadMetadata;
        let locked;
        if (null != threadMetadata) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = canUnarchiveThread(channel);
      }
      tmp2 = isArchivedThreadResult;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const computeIsReadOnlyThread = function computeIsReadOnlyThread(channel) {
  if (channel.isMediaThread()) {
    return true;
  } else {
    const canResult = closure_8.can(constants.MANAGE_THREADS, channel);
    return channel.isArchivedLockedThread() && !closure_8.can(constants.MANAGE_THREADS, channel);
  }
};
export { useIsThreadModerator };
export { isThreadModerator };
export const useCanRemoveThreadMember = function useCanRemoveThreadMember(channelId) {
  const _require = channelId;
  let items = [closure_7, closure_8, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const channel = outer1_7.getChannel(closure_0);
    if (null == channel) {
      return false;
    } else {
      let tmp5 = channel.type === outer1_12.PRIVATE_THREAD && channel.ownerId === tmp3;
      if (!tmp5) {
        const items = [outer1_8];
        tmp5 = outer1_23(channel, items);
      }
      return tmp5;
    }
  });
};
export { useHasPermissionToJoinThreadVoice };
export const useCanJoinThreadVoice = function useCanJoinThreadVoice(channel) {
  const obj = { guildId: channel.guild_id, location: "e791ea_1" };
  const tmp = importDefault(5652)();
  let enabled = importDefaultResultResult.useExperiment(obj, { autoTrackExposure: false }).enabled;
  const tmp2 = useHasPermissionToJoinThreadVoice(channel);
  const isGameInvitesPost = require(5653) /* _createForOfIteratorHelperLoose */.useIsGameInvitesPost(channel);
  const obj2 = require(5653) /* _createForOfIteratorHelperLoose */;
  let shouldAgeVerifyForAgeGate = require(4345) /* shouldAgeVerifyForAgeGate */.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    shouldAgeVerifyForAgeGate = require(4345) /* shouldAgeVerifyForAgeGate */.shouldShowAgeGateForChannelId(channel.id);
    const obj4 = require(4345) /* shouldAgeVerifyForAgeGate */;
  }
  let tmp7 = !tmp && channel.isVocalThread();
  if (tmp7) {
    if (!enabled) {
      enabled = isGameInvitesPost;
    }
    tmp7 = enabled;
  }
  if (tmp7) {
    tmp7 = tmp2;
  }
  if (tmp7) {
    tmp7 = !shouldAgeVerifyForAgeGate;
  }
  return tmp7;
};
export const useIsNonModInLockedThread = function useIsNonModInLockedThread(isLockedThread) {
  const tmp = useIsThreadModerator(isLockedThread);
  return isLockedThread.isLockedThread() && !useIsThreadModerator(isLockedThread);
};
export const isNonModInLockedThread = function isNonModInLockedThread(closure_0) {
  const tmp = isThreadModerator(closure_0);
  return closure_0.isLockedThread() && !isThreadModerator(closure_0);
};
