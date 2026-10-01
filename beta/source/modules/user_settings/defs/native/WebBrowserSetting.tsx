// Module ID: 15026
// Function ID: 15027
// Name: WebBrowserSetting
// Dependencies: [1074, 11006, 1115, 15027, 8354, 15028, 2]

// Module 15026 (WebBrowserSetting)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8354 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15027 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
