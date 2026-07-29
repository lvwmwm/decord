// Module ID: 14340
// Function ID: 14341
// Name: toggle
// Dependencies: [7756, 10120, 1236, 9662, 3862, 2]

// Module 14340 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9662) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(9662) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
