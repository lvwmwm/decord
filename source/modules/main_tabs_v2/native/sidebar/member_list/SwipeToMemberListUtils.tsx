// Module ID: 10084
// Function ID: 78110
// Name: useIsSwipeToMemberListEnabled
// Dependencies: []
// Exports: isSwipeToMemberListEnabled, useIsSwipeToMemberListEnabled

// Module 10084 (useIsSwipeToMemberListEnabled)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(dependencyMap[0]).useSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(dependencyMap[1]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(dependencyMap[0]).getSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(dependencyMap[1]).SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
