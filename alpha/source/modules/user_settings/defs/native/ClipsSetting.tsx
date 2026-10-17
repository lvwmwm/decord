// Module ID: 16015
// Function ID: 16016
// Name: ClipsSetting
// Dependencies: [1087, 11065, 1128, 16016, 16018, 2]

// Module 16015 (ClipsSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import ClipsIcon from "ClipsIcon" /* 16016 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
