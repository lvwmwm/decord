// Module ID: 14426
// Function ID: 14427
// Name: toggle
// Dependencies: [7880, 10272, 1236, 5848, 3928, 2]

// Module 14426 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    return require(5848) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
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
    return require(5848) /* apexExperiment */.useGameMentionsExperiment({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
