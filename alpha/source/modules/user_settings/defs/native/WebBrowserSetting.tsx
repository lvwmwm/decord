// Module ID: 17613
// Function ID: 17614
// Name: WebBrowserSetting
// Dependencies: [1072, 11677, 1113, 17614, 9178, 17615, 2]

// Module 17613 (WebBrowserSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9178 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 17614 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
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
