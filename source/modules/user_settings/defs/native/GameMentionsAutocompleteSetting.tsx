// Module ID: 14273
// Function ID: 109646
// Name: toggle
// Dependencies: [7697, 10059, 1212, 9600, 3804, 2]

// Module 14273 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9600) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
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
    return require(9600) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
