// Module ID: 11424
// Function ID: 11425
// Name: conjureUnread
// Dependencies: [19, 1244, 6035, 5967, 584, 11, 558, 576, 11425, 504, 11426, 2]
// Exports: ackConjureProject, isConjureProjectUnread

// Module 11424 (conjureUnread)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ReadStateConstants from "ReadStateConstants" /* 5967 */;
import conjureProjectMute from "conjureProjectMute" /* 11425 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import ReadStateStore from "ReadStateStore" /* 6035 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const get_initialized = tmp(504);
function projectBadge(arg0, arg1, arg2) {
  let tmp = null;
  if (!arg2) {
    let tmp3 = arg0 > 0;
    if (!tmp3) {
      let tmp5 = null != arg1;
      if (tmp5) {
        const obj = SnowflakeUtilsDefault;
        tmp5 = 0 !== obj.getNonTimestampBits(arg1);
      }
      tmp3 = tmp5;
    }
    tmp = null;
    if (tmp3) {
      tmp = arg0;
    }
  }
  return tmp;
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureUnreadSummary() {
  let settings;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserSettingsProtoStore];
    const fn = function s() {
      let num = 0;
      let num2 = 0;
      const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
      const iter = resourceIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
        let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
        let obj = require("conjureProjectMute");
        let tmp11 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(settings.settings, nextResult));
        if (null != tmp11) {
          num = num + 1;
          num2 = num2 + tmp12;
        }
        continue;
      }
      return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresObject(tmp4, tmp5);
}) : (function useConjureUnreadSummary() {
  let settings;
  let obj = get_initialized;
  const items = [ReadStateStore, UserSettingsProtoStore];
  return obj.useStateFromStoresObject(items, () => {
    let num = 0;
    let num2 = 0;
    const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
    const iter = resourceIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
      let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
      let obj = require("conjureProjectMute");
      let tmp11 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(settings.settings, nextResult));
      if (null != tmp11) {
        num = num + 1;
        num2 = num2 + tmp12;
      }
      continue;
    }
    return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAckConjureProjectWhileViewing(arg0) {
  let closure_0;
  let closure_2;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp2 = dependencyMap;
  let tmp = _require;
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
    const fn = function c() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = stateFromStores(11426)();
  dependencyMap = tmp9;
  if (cResult[4] === tmp9) {
    if (cResult[5] === arg0) {
      let tmp10;
      let tmp11;
      if (cResult[6] === stateFromStores) {
        tmp10 = cResult[7];
        tmp11 = cResult[8];
      }
      const effect = react.useEffect(tmp10, tmp11);
    }
  }
  const fn2 = function l() {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = closure_2;
    }
    if (tmp2) {
      const obj2 = { type: "CONJURE_PROJECT_ACK", projectId: tmp };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  };
  const items2 = [arg0, stateFromStores, tmp9];
  cResult[4] = tmp9;
  cResult[5] = arg0;
  cResult[6] = stateFromStores;
  cResult[7] = fn2;
  cResult[8] = items2;
  tmp11 = items2;
  tmp10 = fn2;
}) : (function useAckConjureProjectWhileViewing(arg0) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let tmp2 = stateFromStores(11426)();
  dependencyMap = tmp2;
  const items2 = [arg0, stateFromStores, tmp2];
  const effect = react.useEffect(() => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = closure_2;
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
export const useConjureUnreadSummary = tmp3;
export const useAckConjureProjectWhileViewing = tmp4;
