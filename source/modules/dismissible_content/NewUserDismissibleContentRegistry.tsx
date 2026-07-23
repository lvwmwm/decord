// Module ID: 3968
// Function ID: 32834
// Name: isUserAccountOldEnough
// Dependencies: [1194, 1338, 1334, 664, 624, 21, 2]
// Exports: disableNewUserDismissibleContent, useNewUserDismissibleContent

// Module 3968 (isUserAccountOldEnough)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function isUserAccountOldEnough(id, prop) {
  let tmp = null != id;
  if (tmp) {
    let tmp7 = table[prop];
    const obj = importDefault(21);
    if (null == tmp7) {
      tmp7 = DAY;
    }
    tmp = importDefault(21).age(id) >= tmp7;
    const ageResult = importDefault(21).age(id);
  }
  return tmp;
}
let closure_5 = { [arg1(1334).DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0, [arg1(1334).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0, [arg1(1334).DismissibleContent.SEEN_LAUNCH_WELCOME]: 0, [arg1(1334).DismissibleContent.SEEN_OLD_DESIGN]: 0, [arg1(1334).DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0, [arg1(1334).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0, [arg1(1334).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0, [arg1(1334).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0, [arg1(1334).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0, [arg1(1334).DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0, [arg1(1334).DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0, [arg1(1334).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0, [arg1(1334).DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0, [arg1(1334).DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0, [arg1(1334).DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0, [arg1(1334).DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0, [arg1(1334).DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0, [arg1(1334).DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0, [arg1(1334).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0, [arg1(1334).DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0, [arg1(1334).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0, [arg1(1334).DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0, [arg1(1334).DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0, [arg1(1334).DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0, [arg1(1334).DismissibleContent.PROFILE_FRAMES_NITRO_TAB_NEW_BADGE]: 0, [arg1(1334).DismissibleContent.BOGO_2025_ANNOUNCEMENT_MODAL]: 0, [arg1(1334).DismissibleContent.NITRO_DROP_REWARD]: 0, [arg1(1334).DismissibleContent.BOUNTIES_SWIPE_UP_NUX]: 0 };
const DAY = require("set").Millis.DAY;
const result = require("DismissibleContent").fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export const useNewUserDismissibleContent = function useNewUserDismissibleContent(arr) {
  const items = [_isNativeReflectConstruct, closure_4];
  const stateFromStoresObject = userId(624).useStateFromStoresObject(items, () => ({ userId: outer1_3.getId(), newUserMinAgeRequiredOverridden: outer1_4.newUserMinAgeRequiredOverridden }));
  userId = stateFromStoresObject.userId;
  let found = arr;
  if (!stateFromStoresObject.newUserMinAgeRequiredOverridden) {
    found = arr.filter((arg0) => outer1_7(userId, arg0));
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
