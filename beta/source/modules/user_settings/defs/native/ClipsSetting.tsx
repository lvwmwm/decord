// Module ID: 15238
// Function ID: 15239
// Name: ClipsSetting
// Dependencies: [1078, 11594, 1119, 15239, 15241, 2]

// Module 15238 (ClipsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import ClipsIcon from "ClipsIcon" /* 15239 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
