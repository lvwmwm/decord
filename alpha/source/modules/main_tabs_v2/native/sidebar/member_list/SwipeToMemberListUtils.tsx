// Module ID: 11503
// Function ID: 11504
// Name: SwipeToMemberListUtils
// Dependencies: [11504, 1197, 6871, 2]
// Exports: isSwipeToMemberListEnabled, isSwipeToMemberListEnabledForChannel, useIsSwipeToMemberListEnabled

// Module 11503 (SwipeToMemberListUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import hasSecondaryViewChatDefault from "hasSecondaryViewChat" /* 6871 */;
import ChatGestureSettings from "ChatGestureSettings" /* 11504 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx");

export function useIsSwipeToMemberListEnabled() {
  const obj = ChatGestureSettings;
  const swipeToReplySettingValue = obj.useSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
}
export function isSwipeToMemberListEnabled() {
  const obj = ChatGestureSettings;
  const swipeToReplySettingValue = obj.getSwipeToReplySettingValue();
  return swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
}
export function isSwipeToMemberListEnabledForChannel(id) {
  const obj = ChatGestureSettings;
  const swipeToReplySettingValue = obj.getSwipeToReplySettingValue();
  const tmp3 = swipeToReplySettingValue === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS && !hasSecondaryViewChatDefault(id);
  return tmp3;
}
