// Module ID: 16003
// Function ID: 16004
// Name: ExplicitMediaFiltersFriendsDMsSetting
// Dependencies: [8592, 16004, 8328, 8111, 1112, 16005, 11817, 16007, 2]

// Module 16003 (ExplicitMediaFiltersFriendsDMsSetting)
import intl4 from "intl" /* 1112 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 8111 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8328 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 16004 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 16005 */;
import useSensitiveMediaSettingDisabled from "useSensitiveMediaSettingDisabled" /* 16007 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["+uI23H"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentFriendsDmSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    const explicitContentFriendDm = obj.useExplicitContentSettingOrDefault().explicitContentFriendDm;
    const obj2 = ExplicitMediaRedactionUtils;
    return obj2.redactionSettingToRenderedString(explicitContentFriendDm)();
  },
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
