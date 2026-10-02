// Module ID: 15068
// Function ID: 15069
// Name: AdvancedSetting
// Dependencies: [1086, 10874, 1127, 6799, 15069, 2]

// Module 15068 (AdvancedSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import SettingsIcon from "SettingsIcon" /* 6799 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
