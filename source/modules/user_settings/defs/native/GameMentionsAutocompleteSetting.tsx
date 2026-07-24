// Module ID: 14262
// Function ID: 109519
// Name: toggle
// Dependencies: [7751, 10127, 1212, 5729, 3803, 2]

// Module 14262 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(5729) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(5729) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
