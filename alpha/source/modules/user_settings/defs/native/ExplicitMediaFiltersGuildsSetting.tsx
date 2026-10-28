// Module ID: 16388
// Function ID: 16389
// Name: ExplicitMediaFiltersGuildsSetting
// Dependencies: [8365, 558, 8156, 16375, 576, 16383, 8623, 7433, 1125, 16384, 1208, 11248, 2]

// Module 16388 (ExplicitMediaFiltersGuildsSetting)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1125 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7433 */;
import useUserIsTeen from "useUserIsTeen" /* 8156 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16375 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 16383 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 16384 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8623);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsDisabled() {
  const obj = useUserIsTeen;
  let userIsTeen = obj.useUserIsTeen();
  const obj2 = useParentalControlSettings;
  if (!userIsTeen) {
    userIsTeen = obj2.useIsParentallyControlled();
  }
  return userIsTeen;
}) : (function useIsDisabled() {
  const obj = useUserIsTeen;
  let userIsTeen = obj.useUserIsTeen();
  const obj2 = useParentalControlSettings;
  if (!userIsTeen) {
    userIsTeen = obj2.useIsParentallyControlled();
  }
  return userIsTeen;
});
ReactCompilerGating = ReactCompilerGating_mod;
function getTitle() {
  const intl = intl4.intl;
  return intl.string(intl4.t["FP+a42"]);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useObscuredContentGuildsSettingValue() {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useExplicitContentSettingsOrDefault;
  const explicitContentGuilds = obj2.useExplicitContentSettingOrDefault().explicitContentGuilds;
  if (cResult[0] !== explicitContentGuilds) {
    const tmpResult = ExplicitMediaRedactionUtils;
    const tmp5 = tmpResult.redactionSettingToRenderedString(explicitContentGuilds)();
    cResult[0] = explicitContentGuilds;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useObscuredContentGuildsSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  const explicitContentGuilds = obj.useExplicitContentSettingOrDefault().explicitContentGuilds;
  const obj2 = ExplicitMediaRedactionUtils;
  return obj2.redactionSettingToRenderedString(explicitContentGuilds)();
});
let obj = {
  useTitle: getTitle,
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: tmp3,
  onPress: function onObscuredContentGuildsOnPress() {
    let intl2;
    let items;
    let obj = SensitiveMediaExplicitRedactionSettingsUtils;
    const explicitContentGuilds = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.GYpoAq);
    let obj2 = {
      title: stringResult,
      subtitle: intl2.string(intl4.t["FP+a42"]),
      handlePress(explicitContentGuilds) {
        const obj = SensitiveMediaExplicitRedactionSettingsUtils;
        const obj2 = { explicitContentGuilds };
        return obj.updateExplicitContentSetting(obj2);
      },
      excluded: items,
      currentValue: explicitContentGuilds
    };
    const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
    ExplicitMediaRedactionNativeUtils;
    intl2 = intl4.intl;
    items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK];
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
  useIsDisabled: tmp2
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
