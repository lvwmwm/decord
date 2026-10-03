// Module ID: 14749
// Function ID: 14750
// Name: DevicesSetting
// Dependencies: [1085, 11129, 1126, 14750, 14752, 2]

// Module 14749 (DevicesSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 14750 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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
