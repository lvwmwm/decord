// Module ID: 15061
// Function ID: 15062
// Name: ClipsSetting
// Dependencies: [1074, 11605, 1114, 15062, 15064, 2]

// Module 15061 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import ClipsIcon from "ClipsIcon" /* 15062 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
