// Module ID: 14508
// Function ID: 14509
// Name: ClipsSetting
// Dependencies: [1074, 11006, 1115, 14509, 14511, 2]

// Module 14508 (ClipsSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import ClipsIcon from "ClipsIcon" /* 14509 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.z2jK6X);
  },
  parent: null,
  IconComponent: ClipsIcon.ClipsIcon,
  screen: {
    route: UserSettingsSections.CLIPS,
    getComponent() {
      return require("SettingsClipsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
