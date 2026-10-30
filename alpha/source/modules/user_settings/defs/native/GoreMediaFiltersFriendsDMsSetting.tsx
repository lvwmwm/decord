// Module ID: 16680
// Function ID: 16681
// Name: GoreMediaFiltersFriendsDMsSetting
// Dependencies: [8424, 16674, 8679, 7466, 16675, 1114, 11505, 16677, 2]

// Module 16680 (GoreMediaFiltersFriendsDMsSetting)
import intl4 from "intl" /* 1114 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7466 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8679 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 16674 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 16675 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 16677 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["+uI23H"]);
  },
  parent: MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    const goreContentFriendDm = obj.useGoreContentSettingOrDefault().goreContentFriendDm;
    const obj2 = ExplicitMediaRedactionUtils;
    return obj2.redactionSettingToRenderedString(goreContentFriendDm)();
  },
  onPress: function onGoreContentFriendsDmOnPress() {
    let intl;
    let intl2;
    let obj = SensitiveMediaGoreRedactionSettingsUtils;
    const goreContentFriendDm = obj.getGoreContentSettingOrDefault().goreContentFriendDm;
    let obj2 = {
      title: intl.string(intl4.t["16/3Bi"]),
      subtitle: intl2.string(intl4.t["+uI23H"]),
      handlePress(goreContentFriendDm) {
        const obj = SensitiveMediaGoreRedactionSettingsUtils;
        const obj2 = { goreContentFriendDm };
        return obj.updateGoreContentSetting(obj2);
      },
      currentValue: goreContentFriendDm
    };
    const handleSensitiveMediaFilterPress = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress;
    ExplicitMediaRedactionNativeUtils;
    intl = intl4.intl;
    intl2 = intl4.intl;
    const result = handleSensitiveMediaFilterPress(obj2);
  },
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t["N/oRI+"]), , ];
    const intl2 = intl4.intl;
    items[1] = intl2.string(intl4.t.QVdYsK);
    const intl3 = intl4.intl;
    items[2] = intl3.string(intl4.t["K0OWP+"]);
    return items;
  },
  useIsDisabled: useSensitiveMediaSettingDisabled.useSensitiveMediaSettingDisabled
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/GoreMediaFiltersFriendsDMsSetting.tsx");

export default pressable;
