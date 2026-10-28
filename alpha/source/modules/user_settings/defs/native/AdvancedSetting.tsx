// Module ID: 17159
// Function ID: 17160
// Name: AdvancedSetting
// Dependencies: [1084, 11248, 1125, 7524, 17160, 2]

// Module 17159 (AdvancedSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import SettingsIcon from "SettingsIcon" /* 7524 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
