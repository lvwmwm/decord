// Module ID: 13711
// Function ID: 105226
// Name: route
// Dependencies: [31, 1849, 7751, 653, 33, 566, 3969, 11043, 4126, 10127, 1212, 13712, 2]

// Module 13711 (route)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.IEpCBQ);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountUsernameSettingTrailing() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_1(outer1_2[6]).getUserTag(outer1_3.getCurrentUser(), { decoration: "never" }));
  },
  useDescription: function useAccountUsernameSettingDescription() {
    let obj = require(11043) /* useCurrentUserHasAutomodQuarantinedProfile */;
    const guildAutomodProfileQuarantineErrors = obj.useGuildAutomodProfileQuarantineErrors();
    let first;
    if (null != guildAutomodProfileQuarantineErrors) {
      const nick = guildAutomodProfileQuarantineErrors.nick;
      if (null != nick) {
        first = nick[0];
      }
    }
    let tmp3 = null;
    if (null != first) {
      obj = { variant: "text-xs/medium", color: "text-feedback-warning", children: first };
      tmp3 = jsx(require(4126) /* Text */.Text, { variant: "text-xs/medium", color: "text-feedback-warning", children: first });
    }
    return tmp3;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.ACCOUNT_CHANGE_USERNAME,
  getComponent() {
    return require(13712) /* UsernameStatusMessage */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/AccountUsernameSetting.tsx");

export default createToggle;
