// Module ID: 14471
// Function ID: 14472
// Name: toggle
// Dependencies: [8005, 10364, 1236, 5870, 3957, 2]

// Module 14471 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate() {
    const GameMentionsMobileExperiment = require(5870) /* apexExperiment */.GameMentionsMobileExperiment;
    return GameMentionsMobileExperiment.useConfig({ location: "GameMentionsInAutocomplete" }).enabled;
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
    const GameMentionsMobileExperiment = require(5870) /* apexExperiment */.GameMentionsMobileExperiment;
    return GameMentionsMobileExperiment.useConfig({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
