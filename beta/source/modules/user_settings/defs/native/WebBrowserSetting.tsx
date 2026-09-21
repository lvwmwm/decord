// Module ID: 15739
// Function ID: 15740
// Name: WebBrowserSetting
// Dependencies: [1078, 11594, 1119, 15740, 9166, 15741, 2]

// Module 15739 (WebBrowserSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9166 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 15740 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
