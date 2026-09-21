// Module ID: 15249
// Function ID: 15250
// Name: ClipsSetting
// Dependencies: [1074, 11725, 1115, 15250, 15252, 2]

// Module 15249 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ClipsIcon from "ClipsIcon" /* 15250 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.z2jK6X);
  },
  parent: null,
  IconComponent: ClipsIcon.ClipsIcon,
  screen: {
    route: Constants.UserSettingsSections.CLIPS,
    getComponent() {
      return require("SettingsClipsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
