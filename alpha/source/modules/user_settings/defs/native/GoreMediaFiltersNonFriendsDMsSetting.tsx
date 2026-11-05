// Module ID: 17007
// Function ID: 17008
// Name: GoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [8578, 17000, 8833, 7614, 17001, 1113, 11737, 17003, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 17007 (GoreMediaFiltersNonFriendsDMsSetting)
import intl4 from "intl" /* 1113 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7614 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8833 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 17000 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 17001 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 17003 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
