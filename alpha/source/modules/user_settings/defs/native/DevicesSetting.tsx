// Module ID: 16797
// Function ID: 16798
// Name: DevicesSetting
// Dependencies: [1072, 11505, 1114, 16798, 16800, 2]

// Module 16797 (DevicesSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import LaptopPhoneIcon from "LaptopPhoneIcon" /* 16798 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
