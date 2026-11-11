// Module ID: 17242
// Function ID: 17243
// Name: ExplicitMediaFiltersGuildsSetting
// Dependencies: [9136, 11968, 17228, 17237, 8787, 8574, 1113, 17238, 1196, 12317, 2]

// Module 17242 (ExplicitMediaFiltersGuildsSetting)
import intl4 from "intl" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 8574 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 8787 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import useUserIsTeen from "useUserIsTeen" /* 11968 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17228 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 17237 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 17238 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
