// Module ID: 14685
// Function ID: 14686
// Name: pressable
// Dependencies: [7906, 21, 11400, 1233, 2918, 14686, 4867, 14682, 2]

// Module 14685 (pressable)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2918 */;
import useAlertStore from "useAlertStore" /* 4867 */;
import MobileUserSettings from "MobileUserSettings" /* 7906 */;
import AGE_GROUP_CONFIRM_ROW_PROPS from "AGE_GROUP_CONFIRM_ROW_PROPS" /* 14682 */;
import SettingsAgeGroupResetAlert from "SettingsAgeGroupResetAlert" /* 14686 */;
import createToggle from "createToggle" /* 11400 */;

const jsx = jsxProd.jsx;
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["bD//cU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AGE_GROUP_CONFIRM_ROW_PROPS.useShowAssignedAdultAgeGroupRow
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault["bD//cU"]);
  },
  parent: MobileUserSettings.MobileUserSettings.ACCOUNT_AGE_GROUP_ASSIGNED_ADULT,
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Gn0SAj);
  },
  onPress() {
    useAlertStore.openAlert(SettingsAgeGroupResetAlert.SETTINGS_AGE_GROUP_RESET_ALERT_ID, jsx(SettingsAgeGroupResetAlert.default, {}));
  },
  withArrow: true,
  usePredicate: AGE_GROUP_CONFIRM_ROW_PROPS.useShowAssignedAdultAgeGroupRow
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupResetSetting.tsx");

export default pressable;
