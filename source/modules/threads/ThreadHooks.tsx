// Module ID: 5646
// Function ID: 48261
// Name: useCanStartPublicThread
// Dependencies: []
// Exports: computeCanStartPrivateThread, computeCanStartPublicThread, computeIsReadOnlyThread, getIsActiveChannelOrUnarchivableThread, isNonModInLockedThread, useCanJoinThreadVoice, useCanManageThread, useCanRemoveThreadMember, useCanStartThread, useCanViewThreadForMessage, useHasActiveThreads, useIsNonModInLockedThread

// Module 5646 (useCanStartPublicThread)
function useCanStartPublicThread(parentChannel, hasFlag) {
  hasFlag = parentChannel;
  const items = [closure_8];
  const items1 = [parentChannel];
  return canStartThread(hasFlag(dependencyMap[8]).useStateFromStores(items, () => {
    if (arg0.isForumLikeChannel()) {
      let SEND_MESSAGES = constants.SEND_MESSAGES;
    } else {
      SEND_MESSAGES = callback(closure_3[9]).combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
      const obj = callback(closure_3[9]);
    }
    return closure_8.can(SEND_MESSAGES, arg0);
  }, items1), parentChannel, hasFlag);
}
function useCanStartPrivateThread(type) {
  const arg1 = type;
  arg1(dependencyMap[8]);
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
        } else if (importDefault(dependencyMap[10])(hasFlag)) {
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
  const arg1 = channel;
  const items = [closure_8];
  let stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => {
    let canResult = null != arg0;
    if (canResult) {
      canResult = closure_8.can(constants.SEND_MESSAGES_IN_THREADS, arg0);
    }
    if (canResult) {
      canResult = closure_8.can(constants.SEND_MESSAGES, arg0);
    }
    return canResult;
  });
  const obj = arg1(dependencyMap[8]);
  const items1 = [closure_8, closure_7];
  const items2 = [channel];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => {
    let channel = null;
    if (null != arg0) {
      channel = channel.getChannel(arg0.parent_id);
    }
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_8.can(constants.SEND_MESSAGES_IN_THREADS, arg0);
    }
    if (canResult) {
      canResult = closure_8.can(constants.SEND_MESSAGES, channel);
    }
    return canResult;
  }, items2);
  const obj2 = arg1(dependencyMap[8]);
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
  const arg1 = channel;
  const items = [closure_8];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    const items = [closure_8];
    return callback(arg0, items);
  });
}
function isThreadModerator(isLockedThread) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_8];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  let canResult = null != isLockedThread;
  if (canResult) {
    canResult = first.can(constants.MANAGE_THREADS, isLockedThread);
  }
  return canResult;
}
function useHasPermissionToJoinThreadVoice(channel) {
  const arg1 = channel;
  const items = [closure_8];
  let stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => closure_8.can(constants.CONNECT, arg0));
  if (stateFromStores) {
    stateFromStores = useIsActiveChannelOrUnarchivableThread(channel);
  }
  return stateFromStores;
}
let closure_4 = importDefault(dependencyMap[0]);
const THREADED_CHANNEL_TYPES = arg1(dependencyMap[2]).THREADED_CHANNEL_TYPES;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[1]);
({ Permissions: closure_10, MessageFlags: closure_11, ChannelTypes: closure_12 } = arg1(dependencyMap[7]));
const obj = { WebAnalyticsPageLoads: "Rollback UI for File Upload 250MB Powerup", inc: "guild", consumedInboundPromotionId: "2026-04_server_theme", defaultConfig: { enabled: false } };
const items = [{ config: { enabled: true } }];
obj.treatments = items;
const importDefaultResultResult = importDefaultResult(obj);
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/threads/ThreadHooks.tsx");

export const VoiceInThreadsExperiment = importDefaultResultResult;
export { useCanStartPublicThread };
export const computeCanStartPublicThread = function computeCanStartPublicThread(channel, message) {
  if (channel.isForumLikeChannel()) {
    let SEND_MESSAGES = constants.SEND_MESSAGES;
  } else {
    SEND_MESSAGES = importAll(dependencyMap[9]).combine(constants.CREATE_PUBLIC_THREADS, constants.READ_MESSAGE_HISTORY);
    const obj = importAll(dependencyMap[9]);
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
  const arg1 = hasFlag;
  const items = [closure_7];
  const items1 = [hasFlag];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => channel.getChannel(stateFromStores(closure_3[11]).castMessageIdAsChannelId(arg0.id)), items1);
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[8]);
  const items2 = [closure_8];
  const items3 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items2, () => closure_8.can(constants.VIEW_CHANNEL, stateFromStores), items3);
  const tmp3 = !hasFlag.hasFlag(constants2.HAS_THREAD);
  let tmp4 = !tmp3;
  if (!tmp3) {
    tmp4 = null != stateFromStores && stateFromStores1;
    const tmp6 = null != stateFromStores && stateFromStores1;
  }
  return tmp4;
};
export const useHasActiveThreads = function useHasActiveThreads(channel) {
  const arg1 = channel;
  const items = [closure_9, closure_8];
  return arg1(dependencyMap[8]).useStateFromStoresObject(items, (self) => {
    const activeJoinedThreadsForParent = store.getActiveJoinedThreadsForParent(self.guild_id, self.id);
    const activeJoinedRelevantThreadsForParent = store.getActiveJoinedRelevantThreadsForParent(self.guild_id, self.id);
    self = activeJoinedRelevantThreadsForParent;
    const activeUnjoinedThreadsForParent = store.getActiveUnjoinedThreadsForParent(self.guild_id, self.id);
    let obj = callback(closure_3[12])(activeJoinedRelevantThreadsForParent);
    let someResult = obj.some((channel) => closure_8.can(constants.VIEW_CHANNEL, channel.channel));
    const someResult1 = callback(closure_3[12])(activeJoinedThreadsForParent).some((channel) => {
      let canResult = !tmp;
      if (!(channel.channel.id in activeJoinedRelevantThreadsForParent)) {
        canResult = closure_8.can(constants.VIEW_CHANNEL, channel.channel);
      }
      return canResult;
    });
    const obj2 = callback(closure_3[12])(activeJoinedThreadsForParent);
    let someResult2 = callback(closure_3[12])(activeUnjoinedThreadsForParent).some((channel) => closure_8.can(constants.VIEW_CHANNEL, channel));
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
  const arg1 = channel;
  const items = [closure_7];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => {
    let parent_id;
    if (null != arg0) {
      parent_id = arg0.parent_id;
    }
    return channel.getChannel(parent_id);
  });
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[8]);
  const items1 = [closure_8];
  const items2 = [stateFromStores];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = closure_8.can(constants.MANAGE_THREADS, stateFromStores);
    }
    return canResult;
  }, items2);
  const obj2 = arg1(dependencyMap[8]);
  const items3 = [closure_6];
  let tmp4 = null != channel;
  const stateFromStores2 = arg1(dependencyMap[8]).useStateFromStores(items3, () => id.getId());
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
  const arg1 = channelId;
  const items = [closure_7, closure_8, closure_6];
  return arg1(dependencyMap[8]).useStateFromStores(items, () => {
    const channel = channel.getChannel(arg0);
    if (null == channel) {
      return false;
    } else {
      let tmp5 = channel.type === constants.PRIVATE_THREAD && channel.ownerId === tmp3;
      if (!tmp5) {
        const items = [closure_8];
        tmp5 = callback(channel, items);
      }
      return tmp5;
    }
  });
};
export { useHasPermissionToJoinThreadVoice };
export const useCanJoinThreadVoice = function useCanJoinThreadVoice(channel) {
  const obj = { guildId: channel.guild_id, location: "e791ea_1" };
  const tmp = importDefault(dependencyMap[13])();
  let enabled = importDefaultResultResult.useExperiment(obj, { autoTrackExposure: false }).enabled;
  const tmp2 = useHasPermissionToJoinThreadVoice(channel);
  const isGameInvitesPost = arg1(dependencyMap[14]).useIsGameInvitesPost(channel);
  const obj2 = arg1(dependencyMap[14]);
  let shouldAgeVerifyForAgeGate = arg1(dependencyMap[15]).useShouldAgeVerifyForAgeGate();
  if (shouldAgeVerifyForAgeGate) {
    shouldAgeVerifyForAgeGate = arg1(dependencyMap[15]).shouldShowAgeGateForChannelId(channel.id);
    const obj4 = arg1(dependencyMap[15]);
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
export const isNonModInLockedThread = function isNonModInLockedThread(isLockedThread) {
  const tmp = isThreadModerator(isLockedThread);
  return isLockedThread.isLockedThread() && !isThreadModerator(isLockedThread);
};
