// Module ID: 17082
// Function ID: 17083
// Name: ExplicitMediaFiltersNonFriendsDMsSetting
// Dependencies: [8536, 17078, 8791, 7567, 1113, 17079, 11717, 17081, 2]
// Exports: onObscuredContentNonFriendsDmOnPress, useObscuredContentNonFriendsDmSettingValue

// Module 17082 (ExplicitMediaFiltersNonFriendsDMsSetting)
import intl4 from "intl" /* 1113 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7567 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8791 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 17078 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 17079 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 17081 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
import size from "module_2" /* 2 */;

function useObscuredContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  const explicitContentNonFriendDm = obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  const obj2 = ExplicitMediaRedactionUtils;
  return obj2.redactionSettingToRenderedString(explicitContentNonFriendDm)();
}
function onObscuredContentNonFriendsDmOnPress() {
  let intl2;
  let obj = SensitiveMediaExplicitRedactionSettingsUtils;
  const explicitContentNonFriendDm = obj.getExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  const intl = intl4.intl;
  const stringResult = intl.string(intl4.t.GYpoAq);
  let obj2 = {
    title: stringResult,
    subtitle: intl2.string(intl4.t["Yh+HX1"]),
    handlePress(explicitContentNonFriendDm) {
      const obj = SensitiveMediaExplicitRedactionSettingsUtils;
      const obj2 = { explicitContentNonFriendDm };
      return obj.updateExplicitContentSetting(obj2);
    },
    currentValue: explicitContentNonFriendDm
  };
  const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
  ExplicitMediaRedactionNativeUtils;
  intl2 = intl4.intl;
  const result = handleSensitiveMediaFilterPress(obj2);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["Yh+HX1"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: useObscuredContentNonFriendsDmSettingValue,
  onPress: onObscuredContentNonFriendsDmOnPress,
  useSearchTerms: function getSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t["N/oRI+"]), , ];
    const intl2 = intl4.intl;
    items[1] = intl2.string(intl4.t.QVdYsK);
    const intl3 = intl4.intl;
    items[2] = intl3.string(intl4.t["5mnTa7"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useObscuredContentNonFriendsDmSettingValue };
export { onObscuredContentNonFriendsDmOnPress };
