// Module ID: 9716
// Function ID: 9717
// Name: useGetThreadDraftSettings
// Dependencies: [5200, 504, 11, 2]
// Exports: default, useHasThreadDraft

// Module 9716 (useGetThreadDraftSettings)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DraftStore from "DraftStore" /* 5200 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
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
};
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
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
};
