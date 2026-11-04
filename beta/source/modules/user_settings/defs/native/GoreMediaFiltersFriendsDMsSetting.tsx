// Module ID: 16735
// Function ID: 16736
// Name: GoreMediaFiltersFriendsDMsSetting
// Dependencies: [8432, 16729, 8687, 7472, 16730, 1113, 11540, 16732, 2]

// Module 16735 (GoreMediaFiltersFriendsDMsSetting)
import intl4 from "intl" /* 1113 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7472 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8687 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 16729 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 16730 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 16732 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
