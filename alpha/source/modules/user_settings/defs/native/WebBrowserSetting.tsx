// Module ID: 17343
// Function ID: 17344
// Name: WebBrowserSetting
// Dependencies: [1084, 11302, 1125, 17344, 9555, 17345, 2]

// Module 17343 (WebBrowserSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9555 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 17344 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
