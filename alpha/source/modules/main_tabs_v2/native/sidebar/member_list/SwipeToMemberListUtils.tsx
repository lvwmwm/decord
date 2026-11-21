// Module ID: 11935
// Function ID: 11936
// Name: SwipeToMemberListUtils
// Dependencies: [11936, 1195, 6655, 2]
// Exports: isSwipeToMemberListEnabled, isSwipeToMemberListEnabledForChannel, useIsSwipeToMemberListEnabled

// Module 11935 (SwipeToMemberListUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1195 */;
import hasSecondaryViewChatDefault from "hasSecondaryViewChat" /* 6655 */;
import ChatGestureSettings from "ChatGestureSettings" /* 11936 */;
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
