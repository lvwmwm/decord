// Module ID: 11290
// Function ID: 11291
// Name: useIsSwipeToMemberListEnabled
// Dependencies: [11291, 1305, 2]
// Exports: isSwipeToMemberListEnabled, useIsSwipeToMemberListEnabled

// Module 11290 (useIsSwipeToMemberListEnabled)
import set from "set" /* 2 */;
import create from "create" /* 1305 */;
import useSwipeToReplySettingValue from "useSwipeToReplySettingValue" /* 11291 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = useSwipeToReplySettingValue.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = useSwipeToReplySettingValue.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
