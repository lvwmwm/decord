// Module ID: 15803
// Function ID: 15804
// Name: AdvancedSetting
// Dependencies: [1078, 11630, 1119, 7656, 15804, 2]

// Module 15803 (AdvancedSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import SettingsIcon from "SettingsIcon" /* 7656 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
