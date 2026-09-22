// Module ID: 14922
// Function ID: 14923
// Name: GoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [8079, 14910, 7702, 7404, 14911, 1114, 11605, 14913, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 14922 (GoreMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1114 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7404 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7702 */;
import SettingsConstants from "SettingsConstants" /* 8079 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14910 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14911 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14913 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
import size from "module_2" /* 2 */;

function useGoreContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentNonFriendDm)();
}
function onGoreContentNonFriendsDmOnPress() {
  const obj = SensitiveMediaGoreRedactionSettingsUtils;
  const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["16/3Bi"]);
  const intl2 = util.intl;
  obj3.subtitle = intl2.string(util.t["Yh+HX1"]);
  obj3.handlePress = function handlePress(goreContentNonFriendDm) {
    return SensitiveMediaGoreRedactionSettingsUtils.updateGoreContentSetting({ goreContentNonFriendDm });
  };
  obj3.currentValue = obj.getGoreContentSettingOrDefault().goreContentNonFriendDm;
  const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
}
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yh+HX1"]);
  },
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: useGoreContentNonFriendsDmSettingValue,
  onPress: onGoreContentNonFriendsDmOnPress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["N/oRI+"]), , ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersNonFriendsDMsSetting.tsx");

export default pressable;
export { useGoreContentNonFriendsDmSettingValue };
export { onGoreContentNonFriendsDmOnPress };
