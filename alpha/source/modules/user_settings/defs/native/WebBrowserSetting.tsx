// Module ID: 17731
// Function ID: 17732
// Name: WebBrowserSetting
// Dependencies: [1072, 11703, 1113, 17732, 9148, 17733, 2]

// Module 17731 (WebBrowserSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9148 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 17732 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
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
