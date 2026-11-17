// Module ID: 18020
// Function ID: 18021
// Name: TypingIndicatorSetting
// Dependencies: [19, 1072, 21, 18021, 17286, 5143, 17285, 5140, 12612, 1113, 4135, 18022, 13452, 18024, 2]

// Module 18020 (TypingIndicatorSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef4135 from "module_4135" /* 4135 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5140 */;
import dismissible_content from "dismissible_content" /* 5143 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13452 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 17285 */;
import CustomTypingIndicatorNewPresetsExperiment from "CustomTypingIndicatorNewPresetsExperiment" /* 18021 */;
import ChatDotsIcon from "ChatDotsIcon" /* 18022 */;
import react from "react" /* 19 */;
import DismissibleBadgeUtils_mod from "DismissibleBadgeUtils" /* 17286 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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
    return intl.string(_modDef4135["pT+BVM"]);
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
    let obj = enabled(18021);
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
