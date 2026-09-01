// Module ID: 15402
// Function ID: 15403
// Name: route
// Dependencies: [7884, 676, 11068, 1236, 15403, 2]

// Module 15402 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import createToggle from "createToggle" /* 11068 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gMlDNd);
  },
  parent: MobileUserSettings.MobileUserSettings.PREMIUM,
  unsearchable: true,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.PROFILE_CUSTOMIZATION_TRY_IT_OUT,
  getComponent() {
    return require(15403) /* ProfileCustomizationTryItOutSettingScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/PremiumProfileCustomizationTryItOutSetting.tsx");

export default route;
