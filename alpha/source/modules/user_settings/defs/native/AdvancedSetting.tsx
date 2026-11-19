// Module ID: 16999
// Function ID: 17000
// Name: AdvancedSetting
// Dependencies: [1072, 11875, 1113, 10309, 17000, 2]

// Module 16999 (AdvancedSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import SettingsIcon from "SettingsIcon" /* 10309 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
