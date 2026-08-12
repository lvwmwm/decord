// Module ID: 10491
// Function ID: 10492
// Name: useIsSwipeToMemberListEnabled
// Dependencies: [10492, 1306, 2]
// Exports: isSwipeToMemberListEnabled, useIsSwipeToMemberListEnabled

// Module 10491 (useIsSwipeToMemberListEnabled)
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(10492) /* useSwipeToReplySettingValue */.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = require(10492) /* useSwipeToReplySettingValue */.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === require(1306) /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
