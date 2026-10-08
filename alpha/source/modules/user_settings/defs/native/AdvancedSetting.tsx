// Module ID: 15631
// Function ID: 15632
// Name: AdvancedSetting
// Dependencies: [1085, 11262, 1126, 7082, 15632, 2]

// Module 15631 (AdvancedSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsIcon from "SettingsIcon" /* 7082 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
