// Module ID: 16917
// Function ID: 16918
// Name: TypingIndicatorSetting
// Dependencies: [19, 1071, 21, 16918, 16175, 4845, 16174, 4842, 11914, 1112, 4246, 16919, 12912, 16921, 2]

// Module 16917 (TypingIndicatorSetting)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import _modDef4246 from "module_4246" /* 4246 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4842 */;
import dismissible_content from "dismissible_content" /* 4845 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12912 */;
import DismissiblePremiumNewBadgeDefault from "DismissiblePremiumNewBadge" /* 16174 */;
import CustomTypingIndicatorNewPresetsExperiment from "CustomTypingIndicatorNewPresetsExperiment" /* 16918 */;
import ChatDotsIcon from "ChatDotsIcon" /* 16919 */;
import react from "react" /* 19 */;
import DismissibleBadgeUtils_mod from "DismissibleBadgeUtils" /* 16175 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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
    return intl.string(_modDef4246["pT+BVM"]);
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
    let obj = enabled(16918);
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
