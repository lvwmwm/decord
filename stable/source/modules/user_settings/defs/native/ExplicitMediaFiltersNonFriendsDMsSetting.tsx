// Module ID: 16155
// Function ID: 16156
// Name: ExplicitMediaFiltersNonFriendsDMsSetting
// Dependencies: [8364, 558, 576, 16151, 8618, 7428, 1128, 16152, 11240, 16154, 2]
// Exports: onObscuredContentNonFriendsDmOnPress

// Module 16155 (ExplicitMediaFiltersNonFriendsDMsSetting)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1128 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7428 */;
import SettingsConstants from "SettingsConstants" /* 8364 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 16151 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 16152 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 16154 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11240 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8618);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentNonFriendsDmSettingValue() {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useExplicitContentSettingsOrDefault;
  const explicitContentNonFriendDm = obj2.useExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  if (cResult[0] !== explicitContentNonFriendDm) {
    const tmpResult = ExplicitMediaRedactionUtils;
    const tmp5 = tmpResult.redactionSettingToRenderedString(explicitContentNonFriendDm)();
    cResult[0] = explicitContentNonFriendDm;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useObscuredContentNonFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  const explicitContentNonFriendDm = obj.useExplicitContentSettingOrDefault().explicitContentNonFriendDm;
  const obj2 = ExplicitMediaRedactionUtils;
  return obj2.redactionSettingToRenderedString(explicitContentNonFriendDm)();
});
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
function getTitle() {
  const intl = intl4.intl;
  return intl.string(intl4.t["Yh+HX1"]);
}
let obj = {
  useTitle: getTitle,
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: tmp2,
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
export const useObscuredContentNonFriendsDmSettingValue = tmp2;
export { onObscuredContentNonFriendsDmOnPress };
