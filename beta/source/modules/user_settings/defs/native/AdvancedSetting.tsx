// Module ID: 15807
// Function ID: 15808
// Name: AdvancedSetting
// Dependencies: [1074, 11754, 1115, 7654, 15808, 2]

// Module 15807 (AdvancedSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import SettingsIcon from "SettingsIcon" /* 7654 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["8/udY0"]);
  },
  parent: null,
  IconComponent: SettingsIcon.SettingsIcon,
  screen: {
    route: Constants.UserSettingsSections.ADVANCED,
    getComponent() {
      return require("SettingsAdvancedScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedSetting.tsx");

export default route;
