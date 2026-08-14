// Module ID: 10419
// Function ID: 10420
// Name: useIsSwipeToMemberListEnabled
// Dependencies: [10420, 1306, 2]
// Exports: isSwipeToMemberListEnabled, useIsSwipeToMemberListEnabled

// Module 10419 (useIsSwipeToMemberListEnabled)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(10420) /* useSwipeToReplySettingValue */.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(10420) /* useSwipeToReplySettingValue */.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
