// Module ID: 15014
// Function ID: 15015
// Name: WebBrowserSetting
// Dependencies: [1086, 10874, 1127, 15015, 8351, 15016, 2]

// Module 15014 (WebBrowserSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8351 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15015 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
