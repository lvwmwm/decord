// Module ID: 16958
// Function ID: 16959
// Name: AdvancedSetting
// Dependencies: [1071, 11942, 1112, 10376, 16959, 2]

// Module 16958 (AdvancedSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import SettingsIcon from "SettingsIcon" /* 10376 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["8/udY0"]);
  },
  parent: null,
  IconComponent: SettingsIcon.SettingsIcon,
  screen: {
    route: UserSettingsSections.ADVANCED,
    getComponent() {
      return require("SettingsAdvancedScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
