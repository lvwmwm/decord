// Module ID: 16743
// Function ID: 16744
// Name: DevicesSetting
// Dependencies: [1084, 11302, 1125, 16744, 16746, 2]

// Module 16743 (DevicesSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 16744 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
