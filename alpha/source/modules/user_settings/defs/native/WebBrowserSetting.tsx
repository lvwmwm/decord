// Module ID: 16089
// Function ID: 16090
// Name: WebBrowserSetting
// Dependencies: [1085, 10663, 1126, 16090, 9104, 16091, 2]

// Module 16089 (WebBrowserSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9104 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 16090 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
