// Module ID: 15573
// Function ID: 15574
// Name: ClipsSetting
// Dependencies: [1085, 10663, 1126, 15574, 15576, 2]

// Module 15573 (ClipsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import ClipsIcon from "ClipsIcon" /* 15574 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
