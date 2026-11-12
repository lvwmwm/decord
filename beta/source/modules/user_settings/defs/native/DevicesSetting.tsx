// Module ID: 17212
// Function ID: 17213
// Name: DevicesSetting
// Dependencies: [1072, 11717, 1113, 17213, 17215, 2]

// Module 17212 (DevicesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 17213 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
