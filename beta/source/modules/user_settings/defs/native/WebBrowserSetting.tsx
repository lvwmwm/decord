// Module ID: 15749
// Function ID: 15750
// Name: WebBrowserSetting
// Dependencies: [1078, 11630, 1119, 15750, 9198, 15751, 2]

// Module 15749 (WebBrowserSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9198 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15750 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
