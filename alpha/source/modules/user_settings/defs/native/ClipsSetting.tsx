// Module ID: 16531
// Function ID: 16532
// Name: ClipsSetting
// Dependencies: [1084, 11248, 1125, 16532, 16534, 2]

// Module 16531 (ClipsSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import ClipsIcon from "ClipsIcon" /* 16532 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
