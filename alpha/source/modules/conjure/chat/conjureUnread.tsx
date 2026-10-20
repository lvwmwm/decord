// Module ID: 11013
// Function ID: 11014
// Name: conjureUnread
// Dependencies: [19, 1246, 6719, 6721, 6653, 584, 11, 558, 576, 11014, 504, 2]
// Exports: ackConjureProject, isConjureProjectUnread

// Module 11013 (conjureUnread)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ReadStateConstants from "ReadStateConstants" /* 6653 */;
import conjureProjectMute from "conjureProjectMute" /* 11014 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import ReadStateStore from "ReadStateStore" /* 6719 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6721 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dispatchResult, importDefault, obj1, tmp14, tmp15, tmp16, tmp19, tmp20, tmp21;

let tmp;
const get_initialized = tmp(504);
function projectBadge(mentionCount, ackMessageIdResult, arg2) {
  let tmp = null;
  if (!arg2) {
    let tmp3 = mentionCount > 0;
    if (!tmp3) {
      let tmp5 = null != ackMessageIdResult;
      if (tmp5) {
        const obj = SnowflakeUtilsDefault;
        tmp5 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
      }
      tmp3 = tmp5;
    }
    tmp = null;
    if (tmp3) {
      tmp = mentionCount;
    }
  }
  return tmp;
}
function isProjectInGuild(project, arg1) {
  if (null == project) {
    return false;
  } else {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = project.preview_guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    return null == guild_id || guild_id === arg1;
  }
}
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectBadge(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserSettingsProtoStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let tmp2 = null;
      if (null != closure_0) {
        const mentionCount = ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
        const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
        let tmp10 = null;
        const obj = conjureProjectMute;
        if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
          let tmp11 = mentionCount > 0;
          if (!tmp11) {
            let tmp12 = null != ackMessageIdResult;
            if (tmp12) {
              const obj2 = SnowflakeUtilsDefault;
              tmp12 = 0 !== obj2.getNonTimestampBits(ackMessageIdResult);
            }
            tmp11 = tmp12;
          }
          tmp10 = null;
          if (tmp11) {
            tmp10 = mentionCount;
          }
        }
        tmp2 = tmp10;
      }
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : (function useConjureProjectBadge(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore, UserSettingsProtoStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const mentionCount = ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
      const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
      let tmp10 = null;
      const obj = conjureProjectMute;
      if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
        let tmp11 = mentionCount > 0;
        if (!tmp11) {
          let tmp12 = null != ackMessageIdResult;
          if (tmp12) {
            const obj2 = SnowflakeUtilsDefault;
            tmp12 = 0 !== obj2.getNonTimestampBits(ackMessageIdResult);
          }
          tmp11 = tmp12;
        }
        tmp10 = null;
        if (tmp11) {
          tmp10 = mentionCount;
        }
      }
      tmp2 = tmp10;
    }
    return tmp2;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureUnreadProjectIds() {
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = ReadStateStore;
    const items = [ReadStateStore, ];
    items[1] = UserSettingsProtoStore;
    const fn = function u() {
      let settings;
      resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
      return resourceIds.filter((item) => {
        const mentionCount = resourceIds.getMentionCount(item, constants.CONJURING_PROJECT);
        const ackMessageIdResult = resourceIds.ackMessageId(item, constants.CONJURING_PROJECT);
        let tmp4 = null;
        const obj = closure_1_0(closure_1_2[9]);
        const tmp3 = closure_1_2;
        if (!obj.isConjureProjectMuted(settings.settings, item)) {
          let tmp5 = mentionCount > 0;
          if (!tmp5) {
            let tmp6 = null != ackMessageIdResult;
            if (tmp6) {
              const obj2 = closure_1_1(tmp3[6]);
              tmp6 = 0 !== obj2.getNonTimestampBits(ackMessageIdResult);
            }
            tmp5 = tmp6;
          }
          tmp4 = null;
          if (tmp5) {
            tmp4 = mentionCount;
          }
        }
        return null != tmp4;
      });
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresArray(tmp4, tmp5);
}) : (function useConjureUnreadProjectIds() {
  let obj = get_initialized;
  const items = [ReadStateStore, UserSettingsProtoStore];
  return obj.useStateFromStoresArray(items, () => {
    let settings;
    resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
    return resourceIds.filter((item) => {
      const mentionCount = resourceIds.getMentionCount(item, constants.CONJURING_PROJECT);
      const ackMessageIdResult = resourceIds.ackMessageId(item, constants.CONJURING_PROJECT);
      let tmp4 = null;
      const obj = closure_1_0(closure_1_2[9]);
      const tmp3 = closure_1_2;
      if (!obj.isConjureProjectMuted(settings.settings, item)) {
        let tmp5 = mentionCount > 0;
        if (!tmp5) {
          let tmp6 = null != ackMessageIdResult;
          if (tmp6) {
            const obj2 = closure_1_1(tmp3[6]);
            tmp6 = 0 !== obj2.getNonTimestampBits(ackMessageIdResult);
          }
          tmp5 = tmp6;
        }
        tmp4 = null;
        if (tmp5) {
          tmp4 = mentionCount;
        }
      }
      return null != tmp4;
    });
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureUnreadSummary(arg0) {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = ReadStateStore;
    const items = [ReadStateStore, , ];
    let tmp6 = UserSettingsProtoStore;
    items[1] = UserSettingsProtoStore;
    let tmp7 = ConjureProjectStore;
    items[2] = ConjureProjectStore;
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class C {
      constructor() {
        num = 0;
        num2 = 0;
        resourceIds = closure_5.getResourceIds(ReadStateTypes.CONJURING_PROJECT);
        iter = resourceIds[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          if (null == closure_0) {
            tmp8 = projectBadge;
            tmp9 = closure_5;
            tmp10 = nextResult;
            tmp11 = ReadStateTypes;
            mentionCount = closure_5.getMentionCount(tmp3, ReadStateTypes.CONJURING_PROJECT);
            tmp14 = closure_0;
            tmp15 = closure_2;
            ackMessageIdResult = closure_5.ackMessageId(tmp3, ReadStateTypes.CONJURING_PROJECT);
            obj = closure_0(closure_2[9]);
            tmp16 = closure_4;
            tmp17 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(closure_4.settings, tmp3));
            if (null != tmp17) {
              tmp19 = num;
              num = num + 1;
              tmp20 = num2;
              tmp21 = tmp17;
              num2 = num2 + tmp18;
            }
          } else {
            tmp5 = isProjectInGuild;
            tmp6 = closure_6;
            tmp7 = nextResult;
          }
          continue;
        }
        obj1 = { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
        return obj1;
      }
    }
    const items1 = [arg0];
    let num2 = 1;
    cResult[1] = arg0;
    cResult[2] = C;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = C;
  } else {
    class C {
      constructor() {
        num = 0;
        num2 = 0;
        resourceIds = closure_5.getResourceIds(ReadStateTypes.CONJURING_PROJECT);
        iter = resourceIds[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          if (null == closure_0) {
            tmp8 = projectBadge;
            tmp9 = closure_5;
            tmp10 = nextResult;
            tmp11 = ReadStateTypes;
            mentionCount = closure_5.getMentionCount(tmp3, ReadStateTypes.CONJURING_PROJECT);
            tmp14 = closure_0;
            tmp15 = closure_2;
            ackMessageIdResult = closure_5.ackMessageId(tmp3, ReadStateTypes.CONJURING_PROJECT);
            obj = closure_0(closure_2[9]);
            tmp16 = closure_4;
            tmp17 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(closure_4.settings, tmp3));
            if (null != tmp17) {
              tmp19 = num;
              num = num + 1;
              tmp20 = num2;
              tmp21 = tmp17;
              num2 = num2 + tmp18;
            }
          } else {
            tmp5 = isProjectInGuild;
            tmp6 = closure_6;
            tmp7 = nextResult;
          }
          continue;
        }
        obj1 = { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
        return obj1;
      }
    }
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
}) : (function useConjureUnreadSummary(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore, UserSettingsProtoStore, ConjureProjectStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let num = 0;
    let num2 = 0;
    const resourceIds = ReadStateStore.getResourceIds(ReadStateTypes.CONJURING_PROJECT);
    const iter = resourceIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null == closure_0) {
        let mentionCount = ReadStateStore.getMentionCount(tmp3, ReadStateTypes.CONJURING_PROJECT);
        let ackMessageIdResult = ReadStateStore.ackMessageId(tmp3, ReadStateTypes.CONJURING_PROJECT);
        let obj = conjureProjectMute;
        let tmp17 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(UserSettingsProtoStore.settings, tmp3));
        if (null != tmp17) {
          num = num + 1;
          num2 = num2 + tmp18;
        }
      }
      continue;
    }
    return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAckConjureProjectWhileViewing(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let stateFromStores;
  let tmp6;
  let tmp7;
  _require = arg0;
  importDefault = arg1;
  let tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class C {
      constructor() {
        tmp = closure_0;
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_5;
          tmp4 = ReadStateTypes;
          mentionCount = closure_5.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
          ackMessageIdResult = closure_5.ackMessageId(tmp, ReadStateTypes.CONJURING_PROJECT);
          num = 0;
          tmp7 = mentionCount > 0;
          if (!tmp7) {
            tmp8 = null != ackMessageIdResult;
            if (tmp8) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj = closure_1(closure_2[6]);
              tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        return tmp2;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = C;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = C;
  } else {
    class C {
      constructor() {
        tmp = closure_0;
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_5;
          tmp4 = ReadStateTypes;
          mentionCount = closure_5.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
          ackMessageIdResult = closure_5.ackMessageId(tmp, ReadStateTypes.CONJURING_PROJECT);
          num = 0;
          tmp7 = mentionCount > 0;
          if (!tmp7) {
            tmp8 = null != ackMessageIdResult;
            if (tmp8) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj = closure_1(closure_2[6]);
              tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        return tmp2;
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(tmp2[10]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === arg1) {
    class C {
      constructor() {
        tmp = closure_0;
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_5;
          tmp4 = ReadStateTypes;
          mentionCount = closure_5.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
          ackMessageIdResult = closure_5.ackMessageId(tmp, ReadStateTypes.CONJURING_PROJECT);
          num = 0;
          tmp7 = mentionCount > 0;
          if (!tmp7) {
            tmp8 = null != ackMessageIdResult;
            if (tmp8) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj = closure_1(closure_2[6]);
              tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        return tmp2;
      }
    }
  }
  class R {
    constructor() {
      tmp2 = null != closure_0;
      tmp = closure_0;
      if (tmp2) {
        tmp2 = closure_2;
      }
      if (tmp2) {
        tmp2 = closure_1;
      }
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[5]);
        obj1 = { type: "CONJURE_PROJECT_ACK", projectId: null };
        obj1.projectId = tmp;
        dispatchResult = obj.dispatch(obj1);
      }
      return;
    }
  }
  const items2 = [arg0, stateFromStores, arg1];
  cResult[4] = arg1;
  cResult[5] = arg0;
  cResult[6] = stateFromStores;
  cResult[7] = R;
  cResult[8] = items2;
}) : (function useAckConjureProjectWhileViewing(arg0, arg1) {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const mentionCount = ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
      const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
      let tmp7 = mentionCount > 0;
      if (!tmp7) {
        let tmp8 = null != ackMessageIdResult;
        if (tmp8) {
          const obj = SnowflakeUtilsDefault;
          tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
        }
        tmp7 = tmp8;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items1);
  const items2 = [arg0, stateFromStores, arg1];
  const effect = react.useEffect(() => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const obj2 = { type: "CONJURE_PROJECT_ACK", projectId: tmp };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
});
function ackConjureProject(projectId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
  obj.dispatch(obj2);
}
const result = size.fileFinishedImporting("modules/conjure/chat/conjureUnread.tsx");

export { ackConjureProject };
export const isConjureProjectUnread = function isConjureProjectUnread(c0) {
  const mentionCount = ReadStateStore.getMentionCount(c0, ReadStateTypes.CONJURING_PROJECT);
  const ackMessageIdResult = ReadStateStore.ackMessageId(c0, ReadStateTypes.CONJURING_PROJECT);
  let tmp3 = mentionCount > 0;
  if (!tmp3) {
    let tmp5 = null != ackMessageIdResult;
    if (tmp5) {
      const obj = SnowflakeUtilsDefault;
      tmp5 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const useConjureProjectBadge = tmp2;
export const useConjureUnreadProjectIds = tmp3;
export const useConjureUnreadSummary = tmp4;
export const useAckConjureProjectWhileViewing = tmp5;
