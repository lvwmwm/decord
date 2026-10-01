// Module ID: 6687
// Function ID: 6688
// Name: ThreadHooks
// Dependencies: [32, 4749, 2049, 502, 2045, 4469, 5818, 1074, 504, 1086, 6688, 11, 12, 6689, 6690, 5046, 2]
// Exports: computeCanStartPrivateThread, computeCanStartPublicThread, computeIsReadOnlyThread, getIsActiveChannelOrUnarchivableThread, isNonModInLockedThread, isThreadModerator, useCanJoinThreadVoice, useCanManageThread, useCanRemoveThreadMember, useCanStartPublicThread, useCanStartThread, useCanViewThreadForMessage, useHasActiveThreads, useHasPermissionToJoinThreadVoice, useIsActiveChannelOrUnarchivableThread, useIsNonModInLockedThread, useIsThreadModerator

// Module 6687 (ThreadHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import isSystemMessageDefault from "isSystemMessage" /* 6688 */;
import useIsRemoteDefault from "useIsRemote" /* 6689 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import createExperiment from "createExperiment" /* 4749 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5818 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let closure_12;
let items;
let unpackModuleId;
const f82826 = () => {
  let SEND_MESSAGES;
  const tmp = channel;
  if (channel.isForumLikeChannel()) {
    SEND_MESSAGES = constants.SEND_MESSAGES;
  } else {
    const obj = BigFlagUtilsAll;
    SEND_MESSAGES = obj.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
  }
  return PermissionStore.can(SEND_MESSAGES, tmp);
};
const f82830 = () => {
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  let canResult = null != channel;
  const tmp = channel;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, tmp);
  }
  return canResult;
};
const f82831 = () => PermissionStore.can(constants.CONNECT, channel);
function useCanStartPrivateThread(type) {
  _require = type;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [type];
  let tmp3 = type.type === constants3.GUILD_TEXT;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const can = PermissionStore.can;
    const obj = BigFlagUtilsAll;
    return can(obj.combine(constants.CREATE_PRIVATE_THREADS), type);
  }, items1);
  if (!tmp3) {
    tmp3 = type.type === tmp2.GUILD_APP;
  }
  if (tmp3) {
    let flag = false;
    if (stateFromStores) {
      flag = false;
      if (THREADED_CHANNEL_TYPES.has(type.type)) {
        flag = true;
      }
    }
    tmp3 = flag;
  }
  return tmp3;
}
function useCanUnarchiveThread(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    const canResult = null != channel && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, tmp) && PermissionStore.can(constants.SEND_MESSAGES, tmp);
    return canResult;
  });
  const items1 = [PermissionStore, ChannelStore];
  const items2 = [channel];
  const obj2 = require("get initialized");
  _require = channel;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    channel = null;
    if (null != closure_0) {
      channel = ChannelStore.getChannel(tmp.parent_id);
    }
    const canResult = null != channel && PermissionStore.can(constants.SEND_MESSAGES_IN_THREADS, tmp) && PermissionStore.can(constants.SEND_MESSAGES, channel);
    return canResult;
  }, items2);
  const items3 = [PermissionStore];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items3, f82830);
  if (stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  let tmp5 = !(null == channel || !channel.isThread() || channel.isMediaThread());
  const tmp4 = null == channel || !channel.isThread() || channel.isMediaThread();
  if (tmp5) {
    const threadMetadata = channel.threadMetadata;
    let locked;
    if (threadMetadata != null) {
      locked = threadMetadata.locked;
    }
    if (locked) {
      stateFromStores = stateFromStores2;
    }
    tmp5 = stateFromStores;
  }
  return tmp5;
}
function canUnarchiveThread(stateFromStores) {
  let canResult = null != stateFromStores && obj.can(constants.SEND_MESSAGES_IN_THREADS, stateFromStores);
  let channel = null;
  if (null != stateFromStores) {
    channel = ChannelStore.getChannel(stateFromStores.parent_id);
  }
  const canResult1 = null != channel && obj.can(constants.SEND_MESSAGES_IN_THREADS, channel);
  if (canResult) {
    canResult = canResult1;
  }
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  const canResult2 = null != stateFromStores && first.can(constants.MANAGE_THREADS, stateFromStores);
  let tmp10 = !(null == stateFromStores || !stateFromStores.isThread() || stateFromStores.isMediaThread());
  null == stateFromStores || !stateFromStores.isThread() || stateFromStores.isMediaThread();
  if (tmp10) {
    const threadMetadata = stateFromStores.threadMetadata;
    let locked;
    if (threadMetadata != null) {
      locked = threadMetadata.locked;
    }
    if (locked) {
      canResult = canResult2;
    }
    tmp10 = canResult;
  }
  return tmp10;
}
const THREADED_CHANNEL_TYPES = ChannelRecord.THREADED_CHANNEL_TYPES;
({ Permissions: c10, MessageFlags: unpackModuleId, ChannelTypes: closure_12 } = Constants);
let obj = { id: "2022-07_voice_in_threads", label: "Voice in Threads", kind: "guild", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "On", config: { enabled: true } }];
const importDefaultResultResult = createExperiment(obj);
const result = size.fileFinishedImporting("modules/threads/ThreadHooks.tsx");

export const VoiceInThreadsExperiment = importDefaultResultResult;
export const useCanStartPublicThread = function useCanStartPublicThread(type, arg1) {
  _require = type;
  const items = [PermissionStore];
  const items1 = [type];
  let flag = false;
  const obj = require("get initialized");
  if (obj.useStateFromStores(items, f82826, items1)) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(type.type)) {
      flag = true;
      if (null != arg1) {
        flag = false;
        if (!arg1.hasFlag(constants2.HAS_THREAD)) {
          flag = true;
          if (isSystemMessageDefault(arg1)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
};
export const computeCanStartPublicThread = function computeCanStartPublicThread(channel, message) {
  let SEND_MESSAGES;
  if (channel.isForumLikeChannel()) {
    SEND_MESSAGES = constants.SEND_MESSAGES;
  } else {
    const obj = BigFlagUtilsAll;
    SEND_MESSAGES = obj.combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
  }
  let flag = false;
  if (PermissionStore.can(SEND_MESSAGES, channel)) {
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(channel.type)) {
      flag = true;
      if (null != message) {
        flag = false;
        if (!message.hasFlag(unpackModuleId.HAS_THREAD)) {
          flag = true;
          if (isSystemMessageDefault(message)) {
            flag = false;
          }
        }
      }
    }
  }
  return flag;
};
export { useCanStartPrivateThread };
export const computeCanStartPrivateThread = function computeCanStartPrivateThread(type, hasFlag) {
  let tmp3 = type.type === constants3.GUILD_TEXT;
  const canResult = PermissionStore.can(constants.CREATE_PRIVATE_THREADS, type);
  if (!tmp3) {
    tmp3 = type.type === tmp2.GUILD_APP;
  }
  if (tmp3) {
    let flag = false;
    if (canResult) {
      flag = false;
      if (THREADED_CHANNEL_TYPES.has(type.type)) {
        flag = true;
        if (null != hasFlag) {
          flag = false;
          if (!hasFlag.hasFlag(unpackModuleId.HAS_THREAD)) {
            flag = true;
            if (isSystemMessageDefault(hasFlag)) {
              flag = false;
            }
          }
        }
      }
    }
    tmp3 = flag;
  }
  return tmp3;
};
export const useCanStartThread = function useCanStartThread(channel) {
  _require = channel;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [channel];
  let flag = false;
  if (obj.useStateFromStores(items, f82826, items1)) {
    let tmp = THREADED_CHANNEL_TYPES;
    flag = false;
    if (THREADED_CHANNEL_TYPES.has(channel.type)) {
      flag = true;
    }
  }
  if (!flag) {
    flag = useCanStartPrivateThread(channel);
  }
  return flag;
};
export const useCanViewThreadForMessage = function useCanViewThreadForMessage(hasFlag) {
  _require = hasFlag;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const items1 = [hasFlag];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const getChannel = ChannelStore.getChannel;
    const obj = SnowflakeUtilsDefault;
    return getChannel(obj.castMessageIdAsChannelId(hasFlag.id));
  }, items1);
  const items2 = [PermissionStore];
  const items3 = [stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores), items3);
  let hasFlagResult = hasFlag.hasFlag(constants2.HAS_THREAD);
  if (hasFlagResult) {
    hasFlagResult = null != stateFromStores && stateFromStores1;
  }
  return hasFlagResult;
};
export const useHasActiveThreads = function useHasActiveThreads(channel) {
  _require = channel;
  let obj = require("get initialized");
  const items = [ActiveJoinedThreadsStore, PermissionStore];
  return obj.useStateFromStoresObject(items, () => {
    const activeJoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedThreadsForParent(channel.guild_id, channel.id);
    const activeJoinedRelevantThreadsForParent = ActiveJoinedThreadsStore.getActiveJoinedRelevantThreadsForParent(channel.guild_id, channel.id);
    const activeUnjoinedThreadsForParent = ActiveJoinedThreadsStore.getActiveUnjoinedThreadsForParent(channel.guild_id, channel.id);
    const obj = _modDef12(activeJoinedRelevantThreadsForParent);
    const someResult = obj.some((channel) => closure_1_8.can(constants.VIEW_CHANNEL, channel.channel));
    const obj2 = _modDef12(activeJoinedThreadsForParent);
    const someResult1 = obj2.some((channel) => {
      const canResult = !(channel.channel.id in activeJoinedRelevantThreadsForParent) && closure_2_8.can(constants.VIEW_CHANNEL, channel.channel);
      return canResult;
    });
    const obj3 = _modDef12(activeUnjoinedThreadsForParent);
    let someResult2 = obj3.some((item) => closure_1_8.can(constants.VIEW_CHANNEL, item));
    const obj4 = { hasActiveThreads: someResult || someResult1 || someResult2, hasMoreActiveThreads: someResult2 };
    if (!someResult2) {
      someResult2 = someResult1;
    }
    return obj4;
  });
};
export const useCanManageThread = function useCanManageThread(channel) {
  let id;
  _require = channel;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let parent_id;
    const getChannel = ChannelStore.getChannel;
    if (channel != null) {
      parent_id = channel.parent_id;
    }
    return getChannel(parent_id);
  });
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const canResult = null != stateFromStores && PermissionStore.can(constants.MANAGE_THREADS, tmp);
    return canResult;
  }, items2);
  const items3 = [AuthenticationStore];
  let tmp4 = null != channel;
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items3, () => id.getId());
  if (tmp4) {
    tmp4 = null != stateFromStores;
  }
  if (tmp4) {
    let isThreadResult = channel.isThread();
    if (isThreadResult) {
      let tmp6 = stateFromStores1;
      if (!tmp6) {
        tmp6 = !channel.isLockedThread() && channel.ownerId === stateFromStores2;
        !channel.isLockedThread() && channel.ownerId === stateFromStores2;
      }
      isThreadResult = tmp6;
    }
    tmp4 = isThreadResult;
  }
  return tmp4;
};
export { useCanUnarchiveThread };
export { canUnarchiveThread };
export const useIsActiveChannelOrUnarchivableThread = function useIsActiveChannelOrUnarchivableThread(channel) {
  let tmp2 = null != channel;
  if (tmp2) {
    const isThreadResult = channel.isThread();
    let isActiveThreadResult = !isThreadResult;
    if (isThreadResult) {
      isActiveThreadResult = channel.isActiveThread();
    }
    if (!isActiveThreadResult) {
      let isArchivedThreadResult = channel.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = channel.threadMetadata;
        let locked;
        if (threadMetadata != null) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = tmp;
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp2 = isActiveThreadResult;
  }
  return tmp2;
};
export const getIsActiveChannelOrUnarchivableThread = function getIsActiveChannelOrUnarchivableThread(channel) {
  let tmp = null != channel;
  if (tmp) {
    const isThreadResult = channel.isThread();
    let isActiveThreadResult = !isThreadResult;
    if (isThreadResult) {
      isActiveThreadResult = channel.isActiveThread();
    }
    if (!isActiveThreadResult) {
      let isArchivedThreadResult = channel.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = channel.threadMetadata;
        let locked;
        if (threadMetadata != null) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = canUnarchiveThread(channel);
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp = isActiveThreadResult;
  }
  return tmp;
};
export const computeIsReadOnlyThread = function computeIsReadOnlyThread(channel) {
  if (channel.isMediaThread()) {
    return true;
  } else {
    const canResult = PermissionStore.can(constants.MANAGE_THREADS, channel);
    const tmp4 = channel.isArchivedLockedThread() && !canResult;
    return tmp4;
  }
};
export const useIsThreadModerator = function useIsThreadModerator(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f82830);
};
export const isThreadModerator = function isThreadModerator(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  const canResult = null != arg0 && first.can(constants.MANAGE_THREADS, arg0);
  return canResult;
};
export const useCanRemoveThreadMember = function useCanRemoveThreadMember(channelId) {
  _require = channelId;
  let items = [ChannelStore, PermissionStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    if (null == channel) {
      return false;
    } else {
      let tmp5 = channel.type === constants2.PRIVATE_THREAD && channel.ownerId === tmp3;
      if (!tmp5) {
        const items = [PermissionStore];
        const first = _slicedToArray(items, 1)[0];
        tmp5 = null != channel && first.can(constants.MANAGE_THREADS, channel);
        const canResult = null != channel && first.can(constants.MANAGE_THREADS, channel);
      }
      return tmp5;
    }
  });
};
export const useHasPermissionToJoinThreadVoice = function useHasPermissionToJoinThreadVoice(isThread) {
  _require = isThread;
  const items = [PermissionStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, f82831);
  let tmp3 = null != isThread;
  if (tmp3) {
    const isThreadResult = isThread.isThread();
    let isActiveThreadResult = !isThreadResult;
    if (isThreadResult) {
      isActiveThreadResult = isThread.isActiveThread();
    }
    if (!isActiveThreadResult) {
      let isArchivedThreadResult = isThread.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = isThread.threadMetadata;
        let locked;
        if (threadMetadata != null) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = tmp2;
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp3 = isActiveThreadResult;
  }
  if (stateFromStores) {
    stateFromStores = tmp3;
  }
  return stateFromStores;
};
export const useCanJoinThreadVoice = function useCanJoinThreadVoice(channel) {
  _require = channel;
  const items = [PermissionStore];
  const tmp2 = useIsRemoteDefault();
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, f82831);
  let tmp6 = null != channel;
  if (tmp6) {
    const isThreadResult = channel.isThread();
    let isActiveThreadResult = !isThreadResult;
    if (isThreadResult) {
      isActiveThreadResult = channel.isActiveThread();
    }
    if (!isActiveThreadResult) {
      let isArchivedThreadResult = channel.isArchivedThread();
      if (isArchivedThreadResult) {
        const threadMetadata = channel.threadMetadata;
        let locked;
        if (threadMetadata != null) {
          locked = threadMetadata.locked;
        }
        isArchivedThreadResult = true !== locked;
      }
      if (isArchivedThreadResult) {
        isArchivedThreadResult = tmp5;
      }
      isActiveThreadResult = isArchivedThreadResult;
    }
    tmp6 = isActiveThreadResult;
  }
  if (stateFromStores) {
    stateFromStores = tmp6;
  }
  const obj2 = { guildId: channel.guild_id, location: "e791ea_1" };
  let enabled = importDefaultResultResult.useExperiment(obj2, { autoTrackExposure: false }).enabled;
  const tmp3Result = require("GameInvitesChannelUtils");
  const isGameInvitesPost = tmp3Result.useIsGameInvitesPost(channel);
  const tmp3Result3 = require("AgeGateUtils");
  let shouldAgeVerifyForAgeGate = tmp3Result3.useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    const tmp3Result4 = require("AgeGateUtils");
    shouldAgeVerifyForAgeGate = tmp3Result4.shouldShowAgeGateForChannelId(channel.id);
  }
  let tmp13 = !tmp2 && channel.isVocalThread();
  if (tmp13) {
    if (!enabled) {
      enabled = isGameInvitesPost;
    }
    tmp13 = enabled;
  }
  if (tmp13) {
    tmp13 = stateFromStores;
  }
  if (tmp13) {
    tmp13 = !shouldAgeVerifyForAgeGate;
  }
  return tmp13;
};
export const useIsNonModInLockedThread = function useIsNonModInLockedThread(channel) {
  _require = channel;
  let items = [PermissionStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f82830);
  const tmp2 = channel.isLockedThread() && !stateFromStores;
  return tmp2;
};
export const isNonModInLockedThread = function isNonModInLockedThread(isLockedThread) {
  const items = [PermissionStore];
  const first = _slicedToArray(items, 1)[0];
  const canResult = null != isLockedThread && first.can(constants.MANAGE_THREADS, isLockedThread);
  const tmp3 = isLockedThread.isLockedThread() && !canResult;
  return tmp3;
};
