// Module ID: 14260
// Function ID: 109541
// Name: radio
// Dependencies: [31, 7697, 3804, 1212, 1282, 10059, 4060, 2]

// Module 14260 (radio)
import result from "result";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Q7mm4g);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useValue: require("explicitContentFromProto").DefaultGuildThemePreference.useSetting,
  onValueChange: function onDefaultGuildThemePreferenceChange(arg0) {
    const DefaultGuildThemePreference = require(3804) /* explicitContentFromProto */.DefaultGuildThemePreference;
    DefaultGuildThemePreference.updateSetting(Number(arg0));
  },
  useOptions: function useDefaultGuildThemePreferenceOptions() {
    return React.useMemo(() => {
      let obj = {};
      const intl = outer1_0(outer1_1[3]).intl;
      obj.label = intl.string(outer1_0(outer1_1[3]).t.aN3RNQ);
      obj.value = outer1_0(outer1_1[4]).GuildThemeSourcePreference.GUILD;
      const items = [obj, ];
      obj = {};
      const intl2 = outer1_0(outer1_1[3]).intl;
      obj.label = intl2.string(outer1_0(outer1_1[3]).t.js8y7t);
      obj.value = outer1_0(outer1_1[4]).GuildThemeSourcePreference.PERSONAL;
      items[1] = obj;
      return items;
    }, []);
  },
  usePredicate() {
    return require(4060) /* apexExperiment */.useServerThemeUserEnabled("DefaultGuildThemePreferenceSetting");
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/DefaultGuildThemePreferenceSetting.tsx");

export default createToggle;
