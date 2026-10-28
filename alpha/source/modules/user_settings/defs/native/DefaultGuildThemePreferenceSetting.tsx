// Module ID: 16940
// Function ID: 16941
// Name: DefaultGuildThemePreferenceSetting
// Dependencies: [19, 8365, 4832, 558, 576, 1125, 1208, 11248, 5222, 2]

// Module 16940 (DefaultGuildThemePreferenceSetting)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1125 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1208 */;
import UserSettings from "UserSettings" /* 4832 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5222 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDefaultGuildThemePreferenceOptions() {
  let first;
  let intl;
  let intl2;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl3.t.aN3RNQ), value: preloaded_user_settings.GuildThemeSourcePreference.GUILD };
    intl = tmp(1125).intl;
    const items = [obj2, ];
    const obj3 = { label: intl2.string(intl3.t.js8y7t), value: preloaded_user_settings.GuildThemeSourcePreference.PERSONAL };
    intl2 = tmp(1125).intl;
    items[1] = obj3;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useDefaultGuildThemePreferenceOptions() {
  return react.useMemo(() => {
    let intl;
    let intl2;
    const obj = { label: intl.string(intl3.t.aN3RNQ), value: preloaded_user_settings.GuildThemeSourcePreference.GUILD };
    intl = intl3.intl;
    const items = [obj, ];
    const obj2 = { label: intl2.string(intl3.t.js8y7t), value: preloaded_user_settings.GuildThemeSourcePreference.PERSONAL };
    intl2 = intl3.intl;
    items[1] = obj2;
    return items;
  }, []);
});
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.Q7mm4g);
  },
  parent: MobileUserSettings.APPEARANCE,
  useValue: UserSettings.DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: tmp2,
  usePredicate() {
    const obj = ServerThemeUserExperiment;
    return obj.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;
