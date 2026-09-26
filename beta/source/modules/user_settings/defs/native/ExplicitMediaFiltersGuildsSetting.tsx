// Module ID: 15111
// Function ID: 15112
// Name: ExplicitMediaFiltersGuildsSetting
// Dependencies: [8265, 8954, 15098, 15106, 7874, 7572, 1115, 15107, 1186, 11754, 2]

// Module 15111 (ExplicitMediaFiltersGuildsSetting)
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import SensitiveMediaExplicitRedactionSettingsUtils from "SensitiveMediaExplicitRedactionSettingsUtils" /* 7572 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7874 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import useUserIsTeen from "useUserIsTeen" /* 8954 */;
import useExplicitContentSettingsOrDefault from "useExplicitContentSettingsOrDefault" /* 15106 */;
import ExplicitMediaRedactionNativeUtils from "ExplicitMediaRedactionNativeUtils" /* 15107 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const pressable = SettingBuilders.createPressable({
  useTitle: function getTitle() {
    const intl = util.intl;
    return intl.string(util.t["FP+a42"]);
  },
  parent() {
    return MobileUserSettings.SENSITIVE_CONTENT_FILTERS;
  },
  useTrailing: function useObscuredContentGuildsSettingValue() {
    const obj = useExplicitContentSettingsOrDefault;
    return ExplicitMediaRedactionUtils.redactionSettingToRenderedString(obj.useExplicitContentSettingOrDefault().explicitContentGuilds)();
  },
  onPress: function onObscuredContentGuildsOnPress() {
    const intl = util.intl;
    const obj = SensitiveMediaExplicitRedactionSettingsUtils;
    const stringResult = intl.string(util.t.GYpoAq);
    const obj3 = { title: stringResult, subtitle: null, handlePress: null, excluded: null, currentValue: null };
    const intl2 = util.intl;
    obj3.subtitle = intl2.string(util.t["FP+a42"]);
    obj3.handlePress = function handlePress(explicitContentGuilds) {
      return SensitiveMediaExplicitRedactionSettingsUtils.updateExplicitContentSetting({ explicitContentGuilds });
    };
    const items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK];
    obj3.excluded = items;
    obj3.currentValue = obj.getExplicitContentSettingOrDefault().explicitContentGuilds;
    const result = ExplicitMediaRedactionNativeUtils.handleSensitiveMediaFilterPress(obj3);
  },
  useSearchTerms: function getSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["N/oRI+"]), , ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.QVdYsK);
    const intl3 = util.intl;
    items[2] = intl3.string(util.t["5mnTa7"]);
    return items;
  },
  useIsDisabled() {
    let userIsTeen = useUserIsTeen.useUserIsTeen();
    if (!userIsTeen) {
      userIsTeen = obj2.useIsParentallyControlled();
    }
    return userIsTeen;
  }
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ExplicitMediaFiltersGuildsSetting.tsx");

export default pressable;
