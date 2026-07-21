// Module ID: 7101
// Function ID: 57085
// Name: getHasImportantUnread
// Dependencies: []
// Exports: getHasImportantUnread, useHasImportantUnread

// Module 7101 (getHasImportantUnread)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const UnreadSetting = arg1(dependencyMap[2]).UnreadSetting;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  let hasUnreadResult = closure_2.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = closure_3.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
};
export const useHasImportantUnread = function useHasImportantUnread(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let hasUnreadResult = closure_2.hasUnread(arg0.id);
    if (hasUnreadResult) {
      hasUnreadResult = closure_3.resolveUnreadSetting(arg0) === constants.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
};
