// Module ID: 14368
// Function ID: 14369
// Name: GoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [7417, 14361, 7020, 6719, 14362, 1115, 11006, 14364, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 14368 (GoreMediaFiltersNonFriendsDMsSetting)
import intl4 from "intl" /* 1115 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6719 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7020 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14361 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14362 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14364 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

function useGoreContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  const goreContentNonFriendDm = obj.useGoreContentSettingOrDefault().goreContentNonFriendDm;
  const obj2 = ExplicitMediaRedactionUtils;
  return obj2.redactionSettingToRenderedString(goreContentNonFriendDm)();
}
function onGoreContentNonFriendsDmOnPress() {
  let intl;
  let intl2;
  let obj = SensitiveMediaGoreRedactionSettingsUtils;
  const goreContentNonFriendDm = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  let obj2 = {
    title: intl.string(intl4.t["16/3Bi"]),
    subtitle: intl2.string(intl4.t["Yh+HX1"]),
    handlePress(goreContentNonFriendDm) {
      const obj = SensitiveMediaGoreRedactionSettingsUtils;
      const obj2 = { goreContentNonFriendDm };
      return obj.updateGoreContentSetting(obj2);
    },
    currentValue: goreContentNonFriendDm
  };
  const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
  ExplicitMediaRedactionNativeUtils;
  intl = intl4.intl;
  intl2 = intl4.intl;
  const result = handleSensitiveMediaFilterPress(obj2);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["Yh+HX1"]);
  },
  parent: MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t["N/oRI+"]), , ];
    const intl2 = intl4.intl;
    items[1] = intl2.string(intl4.t.QVdYsK);
    const intl3 = intl4.intl;
    items[2] = intl3.string(intl4.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
