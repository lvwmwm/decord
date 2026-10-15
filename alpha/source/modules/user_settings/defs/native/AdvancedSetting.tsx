// Module ID: 16477
// Function ID: 16478
// Name: AdvancedSetting
// Dependencies: [1085, 10991, 1126, 7313, 16478, 2]

// Module 16477 (AdvancedSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsIcon from "SettingsIcon" /* 7313 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
