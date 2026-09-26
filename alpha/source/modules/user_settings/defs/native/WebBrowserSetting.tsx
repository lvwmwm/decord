// Module ID: 15028
// Function ID: 15029
// Name: WebBrowserSetting
// Dependencies: [1074, 11006, 1115, 15029, 8354, 15030, 2]

// Module 15028 (WebBrowserSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8354 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15029 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
