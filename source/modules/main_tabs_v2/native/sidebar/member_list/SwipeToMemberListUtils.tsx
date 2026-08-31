// Module ID: 11029
// Function ID: 11030
// Name: useIsSwipeToMemberListEnabled
// Dependencies: [11030, 1306, 2]
// Exports: isSwipeToMemberListEnabled, useIsSwipeToMemberListEnabled

// Module 11029 (useIsSwipeToMemberListEnabled)
import set from "set" /* 2 */;
import create from "create" /* 1306 */;
import useSwipeToReplySettingValue from "useSwipeToReplySettingValue" /* 11030 */;

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export const useIsSwipeToMemberListEnabled = function useIsSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = useSwipeToReplySettingValue.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
export const isSwipeToMemberListEnabled = function isSwipeToMemberListEnabled() {
  const swipeToReplySettingValue = useSwipeToReplySettingValue.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
};
