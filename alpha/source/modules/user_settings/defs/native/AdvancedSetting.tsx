// Module ID: 17452
// Function ID: 17453
// Name: AdvancedSetting
// Dependencies: [1072, 11505, 1114, 7555, 17453, 2]

// Module 17452 (AdvancedSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import SettingsIcon from "SettingsIcon" /* 7555 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
