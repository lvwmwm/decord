// Module ID: 15906
// Function ID: 15907
// Name: ClipsSetting
// Dependencies: [1085, 10991, 1126, 15907, 15909, 2]

// Module 15906 (ClipsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ClipsIcon from "ClipsIcon" /* 15907 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
