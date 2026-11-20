// Module ID: 16012
// Function ID: 16013
// Name: GoreMediaFiltersGuildsSetting
// Dependencies: [8592, 10072, 15995, 16004, 8328, 8113, 16005, 1112, 1195, 11817, 2]

// Module 16012 (GoreMediaFiltersGuildsSetting)
import intl4 from "intl" /* 1112 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1195 */;
import SensitiveMediaGoreRedactionSettingsUtils from "SensitiveMediaGoreRedactionSettingsUtils" /* 8113 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8328 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import useUserIsTeen from "useUserIsTeen" /* 10072 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15995 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 16004 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 16005 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
