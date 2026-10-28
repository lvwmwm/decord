// Module ID: 16505
// Function ID: 16506
// Name: DevicesSetting
// Dependencies: [1084, 11248, 1125, 16506, 16508, 2]

// Module 16505 (DevicesSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 16506 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
