// Module ID: 18142
// Function ID: 18143
// Name: WebBrowserSetting
// Dependencies: [1072, 12612, 1113, 18143, 8174, 18144, 2]

// Module 18142 (WebBrowserSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 8174 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 18143 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
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
