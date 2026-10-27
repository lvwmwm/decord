// Module ID: 16875
// Function ID: 16876
// Name: WebBrowserSetting
// Dependencies: [1084, 11212, 1125, 16876, 9491, 16877, 2]

// Module 16875 (WebBrowserSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9491 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 16876 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
