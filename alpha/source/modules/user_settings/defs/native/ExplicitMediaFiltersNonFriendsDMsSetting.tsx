// Module ID: 15026
// Function ID: 15027
// Name: ExplicitMediaFiltersNonFriendsDMsSetting
// Dependencies: [7974, 558, 576, 15022, 8226, 6990, 1126, 15023, 10629, 15025, 2]
// Exports: onObscuredContentNonFriendsDmOnPress

// Module 15026 (ExplicitMediaFiltersNonFriendsDMsSetting)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6990 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15022 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15023 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 15025 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8226);
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
