// Module ID: 3966
// Function ID: 32822
// Name: isUserAccountOldEnough
// Dependencies: []
// Exports: disableNewUserDismissibleContent, useNewUserDismissibleContent

// Module 3966 (isUserAccountOldEnough)
function isUserAccountOldEnough(id, prop) {
  let tmp = null != id;
  if (tmp) {
    let tmp7 = closure_5[prop];
    const obj = importDefault(dependencyMap[5]);
    if (null == tmp7) {
      tmp7 = DAY;
    }
    tmp = importDefault(dependencyMap[5]).age(id) >= tmp7;
    const ageResult = importDefault(dependencyMap[5]).age(id);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = { [arg1(dependencyMap[2]).DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0, [arg1(dependencyMap[2]).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0, [arg1(dependencyMap[2]).DismissibleContent.SEEN_LAUNCH_WELCOME]: 0, [arg1(dependencyMap[2]).DismissibleContent.SEEN_OLD_DESIGN]: 0, [arg1(dependencyMap[2]).DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0, [arg1(dependencyMap[2]).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0, [arg1(dependencyMap[2]).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0, [arg1(dependencyMap[2]).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0, [arg1(dependencyMap[2]).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0, [arg1(dependencyMap[2]).DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0, [arg1(dependencyMap[2]).DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0, [arg1(dependencyMap[2]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0, [arg1(dependencyMap[2]).DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0, [arg1(dependencyMap[2]).DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0, [arg1(dependencyMap[2]).DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0, [arg1(dependencyMap[2]).DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0, [arg1(dependencyMap[2]).DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0, [arg1(dependencyMap[2]).DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0, [arg1(dependencyMap[2]).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0, [arg1(dependencyMap[2]).DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0, [arg1(dependencyMap[2]).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0, [arg1(dependencyMap[2]).DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0, [arg1(dependencyMap[2]).DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0, [arg1(dependencyMap[2]).DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0, [arg1(dependencyMap[2]).DismissibleContent.PROFILE_FRAMES_NITRO_TAB_NEW_BADGE]: 0, [arg1(dependencyMap[2]).DismissibleContent.BOGO_2025_ANNOUNCEMENT_MODAL]: 0, [arg1(dependencyMap[2]).DismissibleContent.NITRO_DROP_REWARD]: 0, [arg1(dependencyMap[2]).DismissibleContent.BOUNTIES_SWIPE_UP_NUX]: 0 };
const DAY = importDefault(dependencyMap[3]).Millis.DAY;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export const useNewUserDismissibleContent = function useNewUserDismissibleContent(arr) {
  const items = [closure_3, closure_4];
  const stateFromStoresObject = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    const obj = { userId: id.getId(), newUserMinAgeRequiredOverridden: obj.newUserMinAgeRequiredOverridden };
    return obj;
  });
  const arg1 = stateFromStoresObject.userId;
  let found = arr;
  if (!stateFromStoresObject.newUserMinAgeRequiredOverridden) {
    found = arr.filter((arg0) => callback(userId, arg0));
  }
  return found;
};
export const disableNewUserDismissibleContent = function disableNewUserDismissibleContent(prop) {
  let tmp = !obj.newUserMinAgeRequiredOverridden;
  if (tmp) {
    tmp = !isUserAccountOldEnough(id.getId(), prop);
  }
  return tmp;
};
export { isUserAccountOldEnough };
