// Module ID: 14481
// Function ID: 14482
// Name: DevicesSetting
// Dependencies: [1074, 11006, 1115, 14482, 14484, 2]

// Module 14481 (DevicesSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14482 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
