// Module ID: 17192
// Function ID: 17193
// Name: BuildOverridesSetting
// Dependencies: [8712, 11942, 14376, 16152, 17193, 2]

// Module 17192 (BuildOverridesSetting)
import SettingsConstants from "SettingsConstants" /* 8712 */;
import RefreshIcon from "RefreshIcon" /* 14376 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16152 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const obj = {
  useTitle() {
    return "Build Overrides";
  },
  parent: null,
  IconComponent: RefreshIcon.RefreshIcon,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate,
  useSearchTerms() {
    return ["build override", "branch", "commit"];
  },
  screen: {
    route: MobileUserSettings.BUILD_OVERRIDES,
    getComponent() {
      return require("BuildOverridesScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/BuildOverridesSetting.tsx");

export default route;
