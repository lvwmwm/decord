// Module ID: 14909
// Function ID: 14910
// Name: ExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [7966, 558, 576, 14910, 8218, 6983, 1126, 14911, 11262, 14913, 2]

// Module 14909 (ExplicitMediaFiltersFriendsDMsSetting)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 6983 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 14910 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 14911 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 14913 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8218);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentFriendsDmSettingValue() {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useExplicitContentSettingsOrDefault;
  const explicitContentFriendDm = obj2.useExplicitContentSettingOrDefault().explicitContentFriendDm;
  if (cResult[0] !== explicitContentFriendDm) {
    const tmpResult = ExplicitMediaRedactionUtils;
    const tmp5 = tmpResult.redactionSettingToRenderedString(explicitContentFriendDm)();
    cResult[0] = explicitContentFriendDm;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useObscuredContentFriendsDmSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  const explicitContentFriendDm = obj.useExplicitContentSettingOrDefault().explicitContentFriendDm;
  const obj2 = ExplicitMediaRedactionUtils;
  return obj2.redactionSettingToRenderedString(explicitContentFriendDm)();
});
function getTitle() {
  const intl = intl4.intl;
  return intl.string(intl4.t["+uI23H"]);
}
let obj = {
  useTitle: getTitle,
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: tmp2,
  onPress: function onObscuredContentFriendsDmOnPress() {
    let intl2;
    let obj = SensitiveMediaExplicitRedactionSettingsUtils;
    const explicitContentFriendDm = obj.getExplicitContentSettingOrDefault().explicitContentFriendDm;
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.GYpoAq);
    let obj2 = {
      title: stringResult,
      subtitle: intl2.string(intl4.t["+uI23H"]),
      handlePress(explicitContentFriendDm) {
        const obj = SensitiveMediaExplicitRedactionSettingsUtils;
        const obj2 = { explicitContentFriendDm };
        return obj.updateExplicitContentSetting(obj2);
      },
      currentValue: explicitContentFriendDm
    };
    const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
    ExplicitMediaRedactionNativeUtils;
    intl2 = intl4.intl;
    const result = handleSensitiveMediaFilterPress(obj2);
  },
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
