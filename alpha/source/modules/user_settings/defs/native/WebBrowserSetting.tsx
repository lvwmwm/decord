// Module ID: 16566
// Function ID: 16567
// Name: WebBrowserSetting
// Dependencies: [1087, 11099, 1128, 16567, 9409, 16568, 2]

// Module 16566 (WebBrowserSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9409 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 16567 */;
import SettingBuilders from "SettingBuilders" /* 11099 */;
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
