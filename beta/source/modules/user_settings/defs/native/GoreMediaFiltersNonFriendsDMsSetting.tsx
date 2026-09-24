// Module ID: 15109
// Function ID: 15110
// Name: GoreMediaFiltersNonFriendsDMsSetting
// Dependencies: [8270, 558, 568, 15102, 7879, 7577, 15103, 1119, 11630, 15105, 2]
// Exports: onGoreContentNonFriendsDmOnPress

// Module 15109 (GoreMediaFiltersNonFriendsDMsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7577 */;
import SettingsConstants from "SettingsConstants" /* 8270 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15102 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15103 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 15105 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const ExplicitMediaRedactionUtils = tmp(7879);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const goreContentNonFriendDm = useExplicitContentSettingsOrDefault.useGoreContentSettingOrDefault().goreContentNonFriendDm;
  if (cResult[0] !== goreContentNonFriendDm) {
    const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentNonFriendDm)();
    cResult[0] = goreContentNonFriendDm;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
    const tmpResult = ExplicitMediaRedactionUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentNonFriendDm)();
});
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
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["Yh+HX1"]);
}
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: tmp2,
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
export const useGoreContentNonFriendsDmSettingValue = tmp2;
export { onGoreContentNonFriendsDmOnPress };
