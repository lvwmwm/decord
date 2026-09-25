// Module ID: 14483
// Function ID: 14484
// Name: ClipsSetting
// Dependencies: [1074, 10993, 1115, 14484, 14486, 2]

// Module 14483 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ClipsIcon from "ClipsIcon" /* 14484 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
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
