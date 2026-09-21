// Module ID: 15098
// Function ID: 15099
// Name: GoreMediaFiltersFriendsDMsSetting
// Dependencies: [8238, 558, 568, 15087, 7847, 7545, 15088, 1119, 11594, 15090, 2]

// Module 15098 (GoreMediaFiltersFriendsDMsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7545 */;
import SettingsConstants from "SettingsConstants" /* 8238 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15087 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15088 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 15090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
import size from "module_2" /* 2 */;

const ExplicitMediaRedactionUtils = tmp(7847);
function getTitle() {
  const intl = util.intl;
  return intl.string(util.t["+uI23H"]);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const goreContentFriendDm = useExplicitContentSettingsOrDefault.useGoreContentSettingOrDefault().goreContentFriendDm;
  if (cResult[0] !== goreContentFriendDm) {
    const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentFriendDm)();
    cResult[0] = goreContentFriendDm;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
    const tmpResult = ExplicitMediaRedactionUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = useExplicitContentSettingsOrDefault;
  return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
});
const pressable = SettingBuilders.createPressable({
  useTitle: getTitle,
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(2);
    const goreContentFriendDm = useExplicitContentSettingsOrDefault.useGoreContentSettingOrDefault().goreContentFriendDm;
    if (cResult[0] !== goreContentFriendDm) {
      const tmp5 = ExplicitMediaRedactionUtils.redactionSettingToRenderedString(goreContentFriendDm)();
      cResult[0] = goreContentFriendDm;
      cResult[1] = tmp5;
      let tmp4 = tmp5;
      const tmpResult = ExplicitMediaRedactionUtils;
    } else {
      tmp4 = cResult[1];
    }
    return tmp4;
  }) : (() => {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  }),
  onPress: function onGoreContentFriendsDmOnPress() {
    const obj = SensitiveMediaGoreRedactionSettingsUtils;
    const obj3 = { title: null, subtitle: null, handlePress: null, currentValue: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t["16/3Bi"]);
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["+uI23H"]);
    obj3.handlePress = function handlePress(goreContentFriendDm) {
      return SensitiveMediaGoreRedactionSettingsUtils.updateGoreContentSetting({ goreContentFriendDm });
    };
    obj3.currentValue = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
  },
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
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
