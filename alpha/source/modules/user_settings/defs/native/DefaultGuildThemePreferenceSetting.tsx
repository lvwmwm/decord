// Module ID: 17564
// Function ID: 17565
// Name: DefaultGuildThemePreferenceSetting
// Dependencies: [19, 8524, 4995, 1113, 1196, 11703, 5380, 2]

// Module 17564 (DefaultGuildThemePreferenceSetting)
import intl3 from "intl" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import UserSettings from "UserSettings" /* 4995 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 5380 */;
import SettingsConstants from "SettingsConstants" /* 8524 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11703 */;
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
