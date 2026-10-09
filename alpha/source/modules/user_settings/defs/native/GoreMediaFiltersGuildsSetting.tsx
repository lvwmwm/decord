// Module ID: 15030
// Function ID: 15031
// Name: GoreMediaFiltersGuildsSetting
// Dependencies: [7974, 558, 7719, 15014, 576, 15022, 8226, 6993, 15023, 1126, 1209, 10629, 2]

// Module 15030 (GoreMediaFiltersGuildsSetting)
import react from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 6993 */;
import useUserIsTeen from "useUserIsTeen" /* 7719 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15014 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15022 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15023 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let tmp;
const ExplicitMediaRedactionUtils = tmp(8226);
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGoreContentGuildsSettingValue() {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = useExplicitContentSettingsOrDefault;
  const goreContentGuilds = obj2.useGoreContentSettingOrDefault().goreContentGuilds;
  if (cResult[0] !== goreContentGuilds) {
    const tmpResult = ExplicitMediaRedactionUtils;
    const tmp5 = tmpResult.redactionSettingToRenderedString(goreContentGuilds)();
    cResult[0] = goreContentGuilds;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useGoreContentGuildsSettingValue() {
  const obj = useExplicitContentSettingsOrDefault;
  const goreContentGuilds = obj.useGoreContentSettingOrDefault().goreContentGuilds;
  const obj2 = ExplicitMediaRedactionUtils;
  return obj2.redactionSettingToRenderedString(goreContentGuilds)();
});
let obj = {
  useTitle: getTitle,
  parent: MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp3,
  onPress: function onGoreContentGuildsOnPress() {
    let intl;
    let intl2;
    let items;
    let obj = SensitiveMediaGoreRedactionSettingsUtils;
    const goreContentGuilds = obj.getGoreContentSettingOrDefault().goreContentGuilds;
    let obj2 = {
      title: intl.string(intl4.t["16/3Bi"]),
      subtitle: intl2.string(intl4.t["FP+a42"]),
      handlePress(goreContentGuilds) {
        const obj = SensitiveMediaGoreRedactionSettingsUtils;
        const obj2 = { goreContentGuilds };
        return obj.updateGoreContentSetting(obj2);
      },
      excluded: items,
      currentValue: goreContentGuilds
    };
    const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
    ExplicitMediaRedactionNativeUtils;
    intl = intl4.intl;
    intl2 = intl4.intl;
    items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK];
    const result = handleSensitiveMediaFilterPress(obj2);
  },
  useIsDisabled: tmp2,
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t["N/oRI+"]), , ];
    const intl2 = intl4.intl;
    items[1] = intl2.string(intl4.t.QVdYsK);
    const intl3 = intl4.intl;
    items[2] = intl3.string(intl4.t["K0OWP+"]);
    return items;
  }
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersGuildsSetting.tsx");

export default pressable;
