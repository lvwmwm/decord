// Module ID: 16679
// Function ID: 16680
// Name: ExplicitMediaFiltersGuildsSetting
// Dependencies: [8424, 8360, 16666, 16674, 8679, 7464, 1114, 16675, 1197, 11505, 2]

// Module 16679 (ExplicitMediaFiltersGuildsSetting)
import intl4 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7464 */;
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
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    const explicitContentGuilds = obj.useExplicitContentSettingOrDefault().explicitContentGuilds;
    const obj2 = ExplicitMediaRedactionUtils;
    return obj2.redactionSettingToRenderedString(explicitContentGuilds)();
  },
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
  useIsDisabled() {
    const obj = useUserIsTeen;
    let userIsTeen = obj.useUserIsTeen();
    const obj2 = useParentalControlSettings;
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
