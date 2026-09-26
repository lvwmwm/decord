// Module ID: 15226
// Function ID: 15227
// Name: DevicesSetting
// Dependencies: [1074, 11754, 1115, 15227, 15229, 2]

// Module 15226 (DevicesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 15227 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
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
