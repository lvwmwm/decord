// Module ID: 9541
// Function ID: 74333
// Name: useGetThreadDraftSettings
// Dependencies: []
// Exports: default, useHasThreadDraft

// Module 9541 (useGetThreadDraftSettings)
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default function useGetThreadDraftSettings(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let tmp = null;
    if (null != arg0) {
      let threadSettings = store.getThreadSettings(arg0);
      if (null == threadSettings) {
        threadSettings = store.getThreadDraftWithParentMessageId(callback(closure_2[2]).castChannelIdAsMessageId(arg0));
        const obj = callback(closure_2[2]);
      }
      tmp = threadSettings;
    }
    return tmp;
  });
};
export const useHasThreadDraft = function useHasThreadDraft(arg0) {
  const arg1 = arg0;
  const items = [closure_3];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      let threadSettings = store.getThreadSettings(arg0);
      if (null == threadSettings) {
        threadSettings = store.getThreadDraftWithParentMessageId(callback(closure_2[2]).castChannelIdAsMessageId(arg0));
        const obj = callback(closure_2[2]);
      }
      tmp = null != threadSettings;
    }
    return tmp;
  });
};
