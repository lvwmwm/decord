// Module ID: 16126
// Function ID: 16127
// Name: WebBrowserSetting
// Dependencies: [1085, 10767, 1126, 16127, 9109, 16128, 2]

// Module 16126 (WebBrowserSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9109 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 16127 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
