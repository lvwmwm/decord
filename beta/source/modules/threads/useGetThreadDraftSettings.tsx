// Module ID: 9779
// Function ID: 9780
// Name: useGetThreadDraftSettings
// Dependencies: [7031, 558, 576, 11, 504, 2]

// Module 9779 (useGetThreadDraftSettings)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DraftStore from "DraftStore" /* 7031 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DraftStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let tmp2 = null;
      if (null != closure_0) {
        let threadSettings = DraftStore.getThreadSettings(tmp);
        const tmp3 = DraftStore;
        if (threadSettings == null) {
          const getThreadDraftWithParentMessageId = tmp3.getThreadDraftWithParentMessageId;
          const obj = SnowflakeUtilsDefault;
          threadSettings = getThreadDraftWithParentMessageId(obj.castChannelIdAsMessageId(tmp));
        }
        tmp2 = threadSettings;
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [DraftStore];
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      let threadSettings = DraftStore.getThreadSettings(tmp);
      const tmp3 = DraftStore;
      if (threadSettings == null) {
        const getThreadDraftWithParentMessageId = tmp3.getThreadDraftWithParentMessageId;
        const obj = SnowflakeUtilsDefault;
        threadSettings = getThreadDraftWithParentMessageId(obj.castChannelIdAsMessageId(tmp));
      }
      tmp2 = threadSettings;
    }
    return tmp2;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DraftStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        let threadSettings = DraftStore.getThreadSettings(tmp);
        const tmp3 = DraftStore;
        if (threadSettings == null) {
          const getThreadDraftWithParentMessageId = tmp3.getThreadDraftWithParentMessageId;
          const obj = SnowflakeUtilsDefault;
          threadSettings = getThreadDraftWithParentMessageId(obj.castChannelIdAsMessageId(tmp));
        }
        tmp2 = null != threadSettings;
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [DraftStore];
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let threadSettings = DraftStore.getThreadSettings(tmp);
      const tmp3 = DraftStore;
      if (threadSettings == null) {
        const getThreadDraftWithParentMessageId = tmp3.getThreadDraftWithParentMessageId;
        const obj = SnowflakeUtilsDefault;
        threadSettings = getThreadDraftWithParentMessageId(obj.castChannelIdAsMessageId(tmp));
      }
      tmp2 = null != threadSettings;
    }
    return tmp2;
  });
});
const result = size.fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default tmp2;
export const useHasThreadDraft = tmp3;
