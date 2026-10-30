// Module ID: 16682
// Function ID: 16683
// Name: GoreMediaFiltersGuildsSetting
// Dependencies: [8424, 8360, 16666, 16674, 8679, 7466, 16675, 1114, 1197, 11505, 2]

// Module 16682 (GoreMediaFiltersGuildsSetting)
import intl4 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 7466 */;
import useUserIsTeen from "useUserIsTeen" /* 8360 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8679 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16666 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 16674 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 16675 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle: function getTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["FP+a42"]);
  },
  parent: MobileUserSettings.SENSITIVE_CONTENT_FILTERS,
  useTrailing: function useGoreContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    const goreContentGuilds = obj.useGoreContentSettingOrDefault().goreContentGuilds;
    const obj2 = ExplicitMediaRedactionUtils;
    return obj2.redactionSettingToRenderedString(goreContentGuilds)();
  },
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
  useIsDisabled() {
    const obj = useUserIsTeen;
    let userIsTeen = obj.useUserIsTeen();
    const obj2 = useParentalControlSettings;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  },
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
