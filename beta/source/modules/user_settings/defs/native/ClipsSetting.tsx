// Module ID: 14496
// Function ID: 14497
// Name: ClipsSetting
// Dependencies: [1086, 10874, 1127, 14497, 14499, 2]

// Module 14496 (ClipsSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import ClipsIcon from "ClipsIcon" /* 14497 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
