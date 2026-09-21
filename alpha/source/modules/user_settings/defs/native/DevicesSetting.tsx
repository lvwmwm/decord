// Module ID: 15223
// Function ID: 15224
// Name: DevicesSetting
// Dependencies: [1074, 11725, 1115, 15224, 15226, 2]

// Module 15223 (DevicesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 15224 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: LaptopPhoneIcon.LaptopPhoneIcon,
  screen: {
    route: Constants.UserSettingsSections.SESSIONS,
    getComponent() {
      return require("UserSettingsSessions").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;
