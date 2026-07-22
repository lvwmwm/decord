// Module ID: 14085
// Function ID: 106935
// Name: radio
// Dependencies: []

// Module 14085 (radio)
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.Q7mm4g);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.APPEARANCE,
  useValue: arg1(dependencyMap[2]).DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = arg1(dependencyMap[2]).DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: function useDefaultGuildThemePreferenceOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = callback(closure_1[3]).intl;
      obj.label = intl.string(callback(closure_1[3]).t.aN3RNQ);
      obj.value = callback(closure_1[4]).GuildThemeSourcePreference.GUILD;
      const items = [obj, ];
      obj = {};
      const intl2 = callback(closure_1[3]).intl;
      obj.label = intl2.string(callback(closure_1[3]).t.js8y7t);
      obj.value = callback(closure_1[4]).GuildThemeSourcePreference.PERSONAL;
      items[1] = obj;
      return items;
    }, []);
  },
  usePredicate() {
    return arg1(dependencyMap[6]).useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default radio;
