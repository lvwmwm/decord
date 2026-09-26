// Module ID: 15112
// Function ID: 15113
// Name: GoreMediaFiltersFriendsDMsSetting
// Dependencies: [8265, 15106, 7874, 7575, 15107, 1115, 11754, 15109, 2]

// Module 15112 (GoreMediaFiltersFriendsDMsSetting)
import util from "util" /* 1115 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7575 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7874 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15106 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15107 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 15109 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["+uI23H"]);
  },
  parent: SettingsConstants.MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useGoreContentSettingOrDefault().goreContentFriendDm)();
  },
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
