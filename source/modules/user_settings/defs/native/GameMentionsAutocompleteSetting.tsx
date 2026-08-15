// Module ID: 14669
// Function ID: 14670
// Name: toggle
// Dependencies: [8198, 10669, 1236, 7295, 4066, 2]

// Module 14669 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.c0oFDw);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate() {
    const GameMentionsMobileExperiment = require(7295) /* apexExperiment */.GameMentionsMobileExperiment;
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
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate() {
    const GameMentionsMobileExperiment = require(7295) /* apexExperiment */.GameMentionsMobileExperiment;
    return GameMentionsMobileExperiment.useConfig({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: require("explicitContentFromProto").IncludeGameMentionsInAutocomplete.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
