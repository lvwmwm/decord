// Module ID: 16280
// Function ID: 16281
// Name: ClipsSetting
// Dependencies: [1071, 11942, 1112, 16281, 16283, 2]

// Module 16280 (ClipsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import ClipsIcon from "ClipsIcon" /* 16281 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
