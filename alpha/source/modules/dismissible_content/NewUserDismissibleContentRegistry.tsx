// Module ID: 5066
// Function ID: 5067
// Name: NewUserDismissibleContentRegistry
// Dependencies: [502, 4850, 4847, 5067, 563, 11, 2]
// Exports: disableNewUserDismissibleContent, isUserAccountOldEnough, useNewUserDismissibleContent

// Module 5066 (NewUserDismissibleContentRegistry)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DcfNewUserCooldownExperiment from "DcfNewUserCooldownExperiment" /* 5067 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore" /* 4850 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_5 = { [dismissible_content.DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0, [dismissible_content.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0, [dismissible_content.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0, [dismissible_content.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0, [dismissible_content.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0, [dismissible_content.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0, [dismissible_content.DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0, [dismissible_content.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0, [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0, [dismissible_content.DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0, [dismissible_content.DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0, [dismissible_content.DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0, [dismissible_content.DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0, [dismissible_content.DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0, [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0, [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0, [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0, [dismissible_content.DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0, [dismissible_content.DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0, [dismissible_content.DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0, [dismissible_content.DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0, [dismissible_content.DismissibleContent.NITRO_DROP_REWARD]: 0 };
const result = size.fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export function useNewUserDismissibleContent(arr) {
  let closure_0;
  let found;
  let id;
  let obj = require("DcfNewUserCooldownExperiment");
  _require = obj.useDcfNewUserCooldown();
  const items = [AuthenticationStore, DismissibleContentFrameworkStore];
  const obj2 = require("useStateFromStores");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { userId: id.getId(), newUserMinAgeRequiredOverridden: DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden };
    return obj;
  });
  const userId = stateFromStoresObject.userId;
  if (stateFromStoresObject.newUserMinAgeRequiredOverridden) {
    const items1 = [];
    HermesBuiltin.arraySpread(items1, arr, 0);
    found = items1;
  } else {
    found = arr.filter((item) => {
      let tmp3 = null != userId;
      if (tmp3) {
        let tmp9 = closure_5[item];
        const obj = SnowflakeUtilsDefault;
        const ageResult = obj.age(tmp);
        if (tmp9 == null) {
          tmp9 = tmp2;
        }
        tmp3 = ageResult >= tmp9;
      }
      return tmp3;
    });
  }
  return found;
}
export function disableNewUserDismissibleContent(prop) {
  let tmp = !DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden;
  if (tmp) {
    const id = AuthenticationStore.getId();
    DcfNewUserCooldownExperiment;
    let tmp9 = null != id;
    if (tmp9) {
      let tmp14 = closure_5[prop];
      const obj = SnowflakeUtilsDefault;
      const ageResult = obj.age(id);
      if (tmp14 == null) {
        tmp14 = tmp7;
      }
      tmp9 = ageResult >= tmp14;
    }
    tmp = !tmp9;
  }
  return tmp;
}
export function isUserAccountOldEnough(arg0, arg1, arg2) {
  let tmp = null != arg0;
  if (tmp) {
    let tmp7 = closure_5[arg1];
    const obj = SnowflakeUtilsDefault;
    const ageResult = obj.age(arg0);
    if (tmp7 == null) {
      tmp7 = arg2;
    }
    tmp = ageResult >= tmp7;
  }
  return tmp;
}
