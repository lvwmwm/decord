// Module ID: 14681
// Function ID: 14682
// Name: route
// Dependencies: [7906, 673, 11400, 1233, 2918, 14682, 14645, 2]

// Module 14681 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2918 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import AGE_GROUP_CONFIRM_ROW_PROPS from "AGE_GROUP_CONFIRM_ROW_PROPS" /* 14682 */;
import createToggle from "createToggle" /* 11400 */;

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.piqs0o);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT,
  useTrailing() {
    const intl = getSystemLocale.intl;
    const intl2 = getSystemLocale.intl;
    return "" + intl.string(getSystemLocale.t.XxRj7f) + " \u2022 " + intl2.string(messagesProxyDefault.FTawSP);
  },
  usePredicate: AGE_GROUP_CONFIRM_ROW_PROPS.useShowAssignedAdultAgeGroupRow,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(14645) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
