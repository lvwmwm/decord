// Module ID: 9548
// Function ID: 74374
// Name: useGetThreadDraftSettings
// Dependencies: [4468, 566, 21, 2]
// Exports: default, useHasThreadDraft

// Module 9548 (useGetThreadDraftSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null;
    if (null != closure_0) {
      let threadSettings = outer1_3.getThreadSettings(closure_0);
      if (null == threadSettings) {
        threadSettings = outer1_3.getThreadDraftWithParentMessageId(outer1_1(outer1_2[2]).castChannelIdAsMessageId(closure_0));
        const obj = outer1_1(outer1_2[2]);
      }
      tmp = threadSettings;
    }
    return tmp;
  });
};
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != closure_0;
    if (tmp) {
      let threadSettings = outer1_3.getThreadSettings(closure_0);
      if (null == threadSettings) {
        threadSettings = outer1_3.getThreadDraftWithParentMessageId(outer1_1(outer1_2[2]).castChannelIdAsMessageId(closure_0));
        const obj = outer1_1(outer1_2[2]);
      }
      tmp = null != threadSettings;
    }
    return tmp;
  });
};
