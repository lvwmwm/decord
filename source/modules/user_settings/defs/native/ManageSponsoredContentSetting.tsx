// Module ID: 15785
// Function ID: 15786
// Name: route
// Dependencies: [7906, 673, 11400, 1233, 2042, 15786, 2]

// Module 15785 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2042 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import createToggle from "createToggle" /* 11400 */;

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
    return require(15786) /* AdTopicRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;
