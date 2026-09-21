// Module ID: 15750
// Function ID: 15751
// Name: WebBrowserSetting
// Dependencies: [1074, 11725, 1115, 15751, 9168, 15752, 2]

// Module 15750 (WebBrowserSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9168 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15751 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["C+DkPu"]);
  },
  usePredicate() {
    return SelectWebBrowserSetting.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: GlobeEarthIcon.GlobeEarthIcon,
  screen: {
    route: Constants.UserSettingsSections.BROWSER,
    getComponent() {
      return require("SettingsWebBrowserScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
