// Module ID: 14840
// Function ID: 14841
// Name: toggle
// Dependencies: [8302, 10584, 1236, 6124, 4134, 2]

// Module 14840 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4134 */;
import apexExperiment from "apexExperiment" /* 6124 */;
import MobileUserSettings from "MobileUserSettings" /* 8302 */;
import createToggle from "createToggle" /* 10584 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c0oFDw);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  usePredicate() {
    const GameMentionsMobileExperiment = apexExperiment.GameMentionsMobileExperiment;
    return GameMentionsMobileExperiment.useConfig({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: explicitContentFromProto.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: explicitContentFromProto.IncludeGameMentionsInAutocomplete.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.c0oFDw);
  },
  parent: MobileUserSettings.MobileUserSettings.APPEARANCE,
  usePredicate() {
    const GameMentionsMobileExperiment = apexExperiment.GameMentionsMobileExperiment;
    return GameMentionsMobileExperiment.useConfig({ location: "GameMentionsInAutocomplete" }).enabled;
  },
  useValue: explicitContentFromProto.IncludeGameMentionsInAutocomplete.useSetting,
  onValueChange: explicitContentFromProto.IncludeGameMentionsInAutocomplete.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/GameMentionsAutocompleteSetting.tsx");

export default toggle;
