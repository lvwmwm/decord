// Module ID: 15913
// Function ID: 15914
// Name: DevicesSetting
// Dependencies: [1087, 11006, 1128, 15914, 15916, 2]

// Module 15913 (DevicesSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 15914 */;
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
