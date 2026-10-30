// Module ID: 17233
// Function ID: 17234
// Name: DefaultGuildThemePreferenceSetting
// Dependencies: [19, 8424, 4834, 1114, 1197, 11505, 5229, 2]

// Module 17233 (DefaultGuildThemePreferenceSetting)
import intl3 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 4834 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5229 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
  useOptions: function useDefaultGuildThemePreferenceOptions() {
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
  },
  usePredicate() {
    const obj = ServerThemeUserExperiment;
    return obj.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;
