// Module ID: 16807
// Function ID: 16808
// Name: AdvancedSetting
// Dependencies: [1087, 11181, 1128, 7473, 16808, 2]

// Module 16807 (AdvancedSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import SettingsIcon from "SettingsIcon" /* 7473 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
