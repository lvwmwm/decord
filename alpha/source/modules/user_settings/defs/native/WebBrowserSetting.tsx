// Module ID: 17397
// Function ID: 17398
// Name: WebBrowserSetting
// Dependencies: [1072, 11505, 1114, 17398, 9574, 17399, 2]

// Module 17397 (WebBrowserSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9574 */;
import SelectWebBrowserSetting from "SelectWebBrowserSetting" /* 17398 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
