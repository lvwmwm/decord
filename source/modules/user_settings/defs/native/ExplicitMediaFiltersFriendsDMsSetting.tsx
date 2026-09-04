// Module ID: 14744
// Function ID: 14745
// Name: pressable
// Dependencies: [7906, 14745, 7533, 7237, 1233, 14746, 11400, 14748, 2]

// Module 14744 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import resolveExplicitContentSettingWithDefaults from "resolveExplicitContentSettingWithDefaults" /* 7237 */;
import redactionSettingToRenderedString from "redactionSettingToRenderedString" /* 7533 */;
import MobileUserSettings2 from "MobileUserSettings" /* 7906 */;
import useExplicitContentSettingOrDefault from "useExplicitContentSettingOrDefault" /* 14745 */;
import handleSensitiveMediaFilterPress from "handleSensitiveMediaFilterPress" /* 14746 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14748 */;
import createToggle from "createToggle" /* 11400 */;

const MobileUserSettings = MobileUserSettings2.MobileUserSettings;
const pressable = createToggle.createPressable({
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+uI23H"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = resolveExplicitContentSettingWithDefaults;
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
});
let obj = {
  useTitle: function getTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+uI23H"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingOrDefault;
    return redactionSettingToRenderedString.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentFriendDm)();
  },
  onPress: function onObscuredContentFriendsDmOnPress() {
    let obj = resolveExplicitContentSettingWithDefaults;
    const intl = getSystemLocale.intl;
    const stringResult = intl.string(getSystemLocale.t.GYpoAq);
    obj = { title: stringResult, subtitle: null, handlePress: null, currentValue: null };
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["+uI23H"]);
    obj[2] = function handlePress(explicitContentFriendDm) {
      let obj = callback(table[3]);
      obj = { explicitContentFriendDm };
      return obj.updateExplicitContentSetting(obj);
    };
    obj[3] = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const result = handleSensitiveMediaFilterPress.handleSensitiveMediaFilterPress(obj);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["N/oRI+"]), , ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t.QVdYsK);
    const intl3 = getSystemLocale.intl;
    items[2] = intl3.string(getSystemLocale.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
