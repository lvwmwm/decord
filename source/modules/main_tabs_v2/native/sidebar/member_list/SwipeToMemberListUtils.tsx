// Module ID: 10125
// Function ID: 78368
// Name: useIsSwipeToMemberListEnabled
// Dependencies: [10126, 1282, 2]
// Exports: isSwipeToMemberListEnabled, useIsSwipeToMemberListEnabled

// Module 10125 (useIsSwipeToMemberListEnabled)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(10126) /* useSwipeToReplySettingValue */.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(10126) /* useSwipeToReplySettingValue */.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(1282) /* _callSuper */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
