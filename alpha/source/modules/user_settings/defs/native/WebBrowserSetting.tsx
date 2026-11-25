// Module ID: 17039
// Function ID: 17040
// Name: WebBrowserSetting
// Dependencies: [1071, 11914, 1112, 17040, 8504, 17041, 2]

// Module 17039 (WebBrowserSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8504 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 17040 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
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
