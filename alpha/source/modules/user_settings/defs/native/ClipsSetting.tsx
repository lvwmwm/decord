// Module ID: 15256
// Function ID: 15257
// Name: ClipsSetting
// Dependencies: [1074, 11729, 1115, 15257, 15259, 2]

// Module 15256 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ClipsIcon from "ClipsIcon" /* 15257 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
