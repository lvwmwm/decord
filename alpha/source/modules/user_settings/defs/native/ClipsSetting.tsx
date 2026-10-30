// Module ID: 16823
// Function ID: 16824
// Name: ClipsSetting
// Dependencies: [1072, 11505, 1114, 16824, 16826, 2]

// Module 16823 (ClipsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import ClipsIcon from "ClipsIcon" /* 16824 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
