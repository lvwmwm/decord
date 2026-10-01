// Module ID: 15080
// Function ID: 15081
// Name: AdvancedSetting
// Dependencies: [1074, 11006, 1115, 6798, 15081, 2]

// Module 15080 (AdvancedSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import SettingsIcon from "SettingsIcon" /* 6798 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
