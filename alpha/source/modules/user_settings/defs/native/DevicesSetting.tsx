// Module ID: 15989
// Function ID: 15990
// Name: DevicesSetting
// Dependencies: [1087, 11065, 1128, 15990, 15992, 2]

// Module 15989 (DevicesSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 15990 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: LaptopPhoneIcon.LaptopPhoneIcon,
  screen: {
    route: UserSettingsSections.SESSIONS,
    getComponent() {
      return require("UserSettingsSessions").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;
