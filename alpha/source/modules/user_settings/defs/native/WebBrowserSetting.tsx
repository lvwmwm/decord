// Module ID: 16455
// Function ID: 16456
// Name: WebBrowserSetting
// Dependencies: [1087, 11006, 1128, 16456, 9334, 16457, 2]

// Module 16455 (WebBrowserSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9334 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 16456 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
