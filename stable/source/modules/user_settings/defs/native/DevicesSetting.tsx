// Module ID: 14469
// Function ID: 14470
// Name: DevicesSetting
// Dependencies: [1086, 10874, 1127, 14470, 14472, 2]

// Module 14469 (DevicesSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14470 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
