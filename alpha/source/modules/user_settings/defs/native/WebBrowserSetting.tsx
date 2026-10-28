// Module ID: 17104
// Function ID: 17105
// Name: WebBrowserSetting
// Dependencies: [1084, 11248, 1125, 17105, 9523, 17106, 2]

// Module 17104 (WebBrowserSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9523 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 17105 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
