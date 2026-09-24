// Module ID: 15248
// Function ID: 15249
// Name: ClipsSetting
// Dependencies: [1078, 11630, 1119, 15249, 15251, 2]

// Module 15248 (ClipsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import ClipsIcon from "ClipsIcon" /* 15249 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
