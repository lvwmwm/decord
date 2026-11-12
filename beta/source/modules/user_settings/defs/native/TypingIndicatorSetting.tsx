// Module ID: 17707
// Function ID: 17708
// Name: TypingIndicatorSetting
// Dependencies: [19, 1072, 21, 17708, 16975, 5003, 16974, 5000, 11717, 1113, 4028, 17709, 13996, 17711, 2]

// Module 17707 (TypingIndicatorSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5000 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13996 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 16974 */;
import CustomTypingIndicatorNewPresetsExperiment from "CustomTypingIndicatorNewPresetsExperiment" /* 17708 */;
import ChatDotsIcon from "ChatDotsIcon" /* 17709 */;
import react from "react" /* 19 */;
import DismissibleBadgeUtils_mod from "DismissibleBadgeUtils" /* 16975 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
const TypingIndicatorSetting = "TypingIndicatorSetting";
let DismissibleBadgeUtils = DismissibleBadgeUtils_mod;
let closure_6 = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE, function useCanShowLaunchBadge() {
  const obj = CustomTypingIndicatorNewPresetsExperiment;
  return !obj.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
});
DismissibleBadgeUtils = DismissibleBadgeUtils_mod;
let closure_7 = DismissibleBadgeUtils.createDismissibleBadgePreNavigationAction(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE, function useCanShowNewPresetsBadge() {
  const obj = CustomTypingIndicatorNewPresetsExperiment;
  return obj.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef4028["pT+BVM"]);
  },
  parent: null,
  IconComponent: ChatDotsIcon.ChatDotsIcon,
  useTrailing() {
    const obj = CustomTypingIndicatorNewPresetsExperiment;
    const enabled = obj.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
    DismissiblePremiumNewBadgeDefault;
    const DismissibleContent = dismissible_content.DismissibleContent;
    return <tmp2 dismissibleContent={enabled ? DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_SETTINGS_BADGE : DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE} newPremiumStyle />;
  },
  usePreNavigationAction() {
    let closure_2;
    let enabled;
    let obj = enabled(17708);
    enabled = obj.useCustomTypingIndicatorNewPresetsConfig(TypingIndicatorSetting).enabled;
    const tmp = closure_6();
    let closure_1 = tmp;
    const tmp2 = closure_7();
    dependencyMap = tmp2;
    const items = [enabled, tmp, tmp2];
    return react.useCallback(() => {
      closure_1();
      closure_2();
      const tmp3 = enabled;
      if (tmp3) {
        const obj = UserSettingsProtoActionCreators;
        obj.addDismissedContent(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_BADGE_PROFILE_PAGE);
      }
      return true;
    }, items);
  },
  usePredicate() {
    const obj = CustomTypingIndicatorExperiment;
    return "settings" === obj.useCustomTypingIndicatorConfig(TypingIndicatorSetting).entryPoint;
  },
  screen: {
    route: UserSettingsSections.TYPING_INDICATOR,
    getComponent() {
      return require("CustomTypingIndicatorEditScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/TypingIndicatorSetting.tsx");

export default route;
