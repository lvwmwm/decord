// Module ID: 16270
// Function ID: 16271
// Name: DevicesSetting
// Dependencies: [1071, 11942, 1112, 16271, 16273, 2]

// Module 16270 (DevicesSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 16271 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
