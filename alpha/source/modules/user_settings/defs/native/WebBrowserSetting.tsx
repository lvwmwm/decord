// Module ID: 16730
// Function ID: 16731
// Name: WebBrowserSetting
// Dependencies: [1087, 11172, 1128, 16731, 9461, 16732, 2]

// Module 16730 (WebBrowserSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9461 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 16731 */;
import SettingBuilders from "SettingBuilders" /* 11172 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["C+DkPu"]);
  },
  usePredicate() {
    const obj = SelectWebBrowserSetting;
    return obj.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: GlobeEarthIcon.GlobeEarthIcon,
  screen: {
    route: UserSettingsSections.BROWSER,
    getComponent() {
      return require("SettingsWebBrowserScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
