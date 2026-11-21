// Module ID: 16884
// Function ID: 16885
// Name: WebBrowserSetting
// Dependencies: [1071, 11937, 1112, 16885, 7766, 16886, 2]

// Module 16884 (WebBrowserSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 7766 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 16885 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
