// Module ID: 15117
// Function ID: 15118
// Name: GoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [8237, 15105, 7845, 7545, 15106, 1115, 11729, 15108, 2]
// Exports: onGoreContentNonFriendsDmOnPress, useGoreContentNonFriendsDmSettingValue

// Module 15117 (GoreMediaFiltersNonFriendsDMsSetting)
import util from "util" /* 1115 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7545 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7845 */;
import SettingsConstants from "SettingsConstants" /* 8237 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15105 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15106 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 15108 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
