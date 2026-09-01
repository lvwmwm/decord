// Module ID: 15073
// Function ID: 15074
// Name: route
// Dependencies: [676, 11068, 1236, 15074, 9369, 15075, 2]

// Module 15073 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9369 */;
import useWebBrowserSettingOptions from "useWebBrowserSettingOptions" /* 15074 */;
import createToggle from "createToggle" /* 11068 */;

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
    return require(15075).default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/WebBrowserSetting.tsx");

export default route;
