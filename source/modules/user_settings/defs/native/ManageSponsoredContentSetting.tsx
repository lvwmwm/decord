// Module ID: 15392
// Function ID: 15393
// Name: route
// Dependencies: [7830, 676, 11006, 1236, 2044, 15393, 2]

// Module 15392 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2044 */;
import MobileUserSettings from "MobileUserSettings" /* 7830 */;
import createToggle from "createToggle" /* 11006 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.yyhs9L);
  },
  parent: MobileUserSettings.MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.MANAGE_SPONSORED_CONTENT,
  getComponent() {
    return require(15393) /* AdTopicRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;
