// Module ID: 16138
// Function ID: 16139
// Name: vibegrationsUnread
// Dependencies: [19, 1231, 4905, 5072, 584, 11, 16139, 558, 576, 12906, 504, 16140, 2]
// Exports: ackVibegrationsProject

// Module 16138 (vibegrationsUnread)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import vibegrationsProjectMute from "vibegrationsProjectMute" /* 12906 */;
import VibegrationsReadStateFlags from "VibegrationsReadStateFlags" /* 16139 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp;
const get_initialized = tmp(504);
function unreadStatus(arg0, arg1, arg2) {
  let tmp = null;
  if (!arg2) {
    tmp = null;
    if (0 !== arg0) {
      if (null != arg1) {
        let FINISHED;
        const obj = SnowflakeUtilsDefault;
        const nonTimestampBits = obj.getNonTimestampBits(arg1);
        const tmp6 = require;
        if (nonTimestampBits & VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT) {
          FINISHED = tmp6(16139).VibegrationsReadStateFlags.NEEDS_INPUT;
        }
        tmp = FINISHED;
      }
      FINISHED = VibegrationsReadStateFlags.VibegrationsReadStateFlags.FINISHED;
    }
  }
  return tmp;
}
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
        const obj = vibegrationsProjectMute;
        if (!obj.isVibegrationsProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
          tmp10 = null;
          if (0 !== mentionCount) {
            if (null != ackMessageIdResult) {
              let FINISHED;
              const obj2 = SnowflakeUtilsDefault;
              const nonTimestampBits = obj2.getNonTimestampBits(ackMessageIdResult);
              if (nonTimestampBits & VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT) {
                FINISHED = tmp7(16139).VibegrationsReadStateFlags.NEEDS_INPUT;
              }
              tmp10 = FINISHED;
            }
            FINISHED = tmp7(16139).VibegrationsReadStateFlags.FINISHED;
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
}) : ((arg0) => {
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
      const obj = vibegrationsProjectMute;
      if (!obj.isVibegrationsProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
        tmp10 = null;
        if (0 !== mentionCount) {
          if (null != ackMessageIdResult) {
            let FINISHED;
            const obj2 = SnowflakeUtilsDefault;
            const nonTimestampBits = obj2.getNonTimestampBits(ackMessageIdResult);
            if (nonTimestampBits & VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT) {
              FINISHED = tmp7(16139).VibegrationsReadStateFlags.NEEDS_INPUT;
            }
            tmp10 = FINISHED;
          }
          FINISHED = tmp7(16139).VibegrationsReadStateFlags.FINISHED;
        }
      }
      tmp2 = tmp10;
    }
    return tmp2;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let settings;
  let tmp4;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserSettingsProtoStore];
    const fn = function u() {
      let hasUnread = false;
      let badgeCount = 0;
      const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
      const iter = resourceIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
        let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
        let tmp8 = _require;
        let tmp9 = dependencyMap;
        let obj = require("vibegrationsProjectMute");
        let tmp11 = unreadStatus(mentionCount, ackMessageIdResult, obj.isVibegrationsProjectMuted(settings.settings, nextResult));
        if (null != tmp11) {
          hasUnread = true;
          if (tmp12 === tmp8(tmp9[6]).VibegrationsReadStateFlags.NEEDS_INPUT) {
            badgeCount = badgeCount + 1;
          }
        }
        continue;
      }
      return { hasUnread, badgeCount };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresObject(tmp4, tmp5);
}) : (() => {
  let settings;
  let obj = get_initialized;
  const items = [ReadStateStore, UserSettingsProtoStore];
  return obj.useStateFromStoresObject(items, () => {
    let hasUnread = false;
    let badgeCount = 0;
    const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
    const iter = resourceIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
      let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
      let tmp8 = _require;
      let tmp9 = dependencyMap;
      let obj = require("vibegrationsProjectMute");
      let tmp11 = unreadStatus(mentionCount, ackMessageIdResult, obj.isVibegrationsProjectMuted(settings.settings, nextResult));
      if (null != tmp11) {
        hasUnread = true;
        if (tmp12 === tmp8(tmp9[6]).VibegrationsReadStateFlags.NEEDS_INPUT) {
          badgeCount = badgeCount + 1;
        }
      }
      continue;
    }
    return { hasUnread, badgeCount };
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
      const tmp2 = null != closure_0 && ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT) > 0;
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
  const tmp9 = stateFromStores(16140)();
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
  class R {
    constructor() {
      let tmp2 = null != closure_0;
      const tmp = closure_0;
      if (tmp2) {
        tmp2 = stateFromStores;
      }
      if (tmp2) {
        tmp2 = closure_2;
      }
      if (tmp2) {
        const obj2 = { type: "VIBEGRATIONS_PROJECT_ACK", projectId: tmp };
        const obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    }
  }
  const items2 = [arg0, stateFromStores, tmp9];
  cResult[4] = tmp9;
  cResult[5] = arg0;
  cResult[6] = stateFromStores;
  cResult[7] = R;
  cResult[8] = items2;
  tmp11 = items2;
  tmp10 = R;
}) : ((arg0) => {
  let closure_0;
  let closure_2;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != closure_0 && ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT) > 0;
    return tmp2;
  }, items1);
  let tmp2 = stateFromStores(16140)();
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
      const obj2 = { type: "VIBEGRATIONS_PROJECT_ACK", projectId: tmp };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  }, items2);
});
function ackVibegrationsProject(projectId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VIBEGRATIONS_PROJECT_ACK", projectId };
  obj.dispatch(obj2);
}
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsUnread.tsx");

export { ackVibegrationsProject };
export const useVibegrationsProjectUnreadStatus = tmp2;
export const useVibegrationsUnreadSummary = tmp3;
export const useAckVibegrationsProjectWhileViewing = tmp4;
