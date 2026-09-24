// Module ID: 15581
// Function ID: 15582
// Name: DefaultGuildThemePreferenceSetting
// Dependencies: [19, 8270, 2023, 558, 568, 1119, 1190, 11630, 4718, 2]

// Module 15581 (DefaultGuildThemePreferenceSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import UserSettings from "UserSettings" /* 2023 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4718 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: null, value: null };
    const intl = tmp(1119).intl;
    obj2.label = intl.string(tmp(1119).t.aN3RNQ);
    obj2.value = tmp(1190).GuildThemeSourcePreference.GUILD;
    const items = [obj2, ];
    const obj3 = { label: null, value: null };
    const intl2 = tmp(1119).intl;
    obj3.label = intl2.string(tmp(1119).t.js8y7t);
    obj3.value = tmp(1190).GuildThemeSourcePreference.PERSONAL;
    items[1] = obj3;
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useMemo(() => {
  const obj = { label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.aN3RNQ);
  obj.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
  const items = [obj, ];
  const obj2 = { label: null, value: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.js8y7t);
  obj2.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
  items[1] = obj2;
  return items;
}, []));
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Q7mm4g);
  },
  parent: fn(8270).MobileUserSettings.APPEARANCE,
  useValue: fn(2023).DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = UserSettings.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { label: null, value: null };
      const intl = tmp(1119).intl;
      obj2.label = intl.string(tmp(1119).t.aN3RNQ);
      obj2.value = tmp(1190).GuildThemeSourcePreference.GUILD;
      const items = [obj2, ];
      const obj3 = { label: null, value: null };
      const intl2 = tmp(1119).intl;
      obj3.label = intl2.string(tmp(1119).t.js8y7t);
      obj3.value = tmp(1190).GuildThemeSourcePreference.PERSONAL;
      items[1] = obj3;
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (() => noop.useMemo(() => {
    const obj = { label: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.aN3RNQ);
    obj.value = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
    const items = [obj, ];
    const obj2 = { label: null, value: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.js8y7t);
    obj2.value = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
    items[1] = obj2;
    return items;
  }, [])),
  usePredicate() {
    return ServerThemeUserExperiment.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;
