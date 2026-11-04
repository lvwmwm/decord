// Module ID: 11727
// Function ID: 11728
// Name: SwipeToMemberListUtils
// Dependencies: [11728, 1196, 7012, 2]
// Exports: isSwipeToMemberListEnabled, isSwipeToMemberListEnabledForChannel, useIsSwipeToMemberListEnabled

// Module 11727 (SwipeToMemberListUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import hasSecondaryViewChatDefault from "hasSecondaryViewChat" /* 7012 */;
import ChatGestureSettings from "ChatGestureSettings" /* 11728 */;
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
