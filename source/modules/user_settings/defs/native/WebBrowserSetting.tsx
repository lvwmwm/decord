// Module ID: 15007
// Function ID: 15008
// Name: route
// Dependencies: [676, 11006, 1236, 15008, 9308, 15009, 2]

// Module 15007 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9308 */;
import useWebBrowserSettingOptions from "useWebBrowserSettingOptions" /* 15008 */;
import createToggle from "createToggle" /* 11006 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["C+DkPu"]);
  },
  usePredicate() {
    return useWebBrowserSettingOptions.useWebBrowserSettingOptions().length > 1;
  },
  parent: null,
  IconComponent: GlobeEarthIcon.GlobeEarthIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.BROWSER,
  getComponent() {
    return require(15009).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
