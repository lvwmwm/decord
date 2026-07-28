// Module ID: 9639
// Function ID: 75027
// Name: getGameMentionsAutocompleteConfig
// Dependencies: [9640, 3838, 2]
// Exports: getGameMentionsAutocompleteConfig

// Module 9639 (getGameMentionsAutocompleteConfig)
const result = require("set").fileFinishedImporting("modules/game_mentions/getGameMentionsAutocompleteConfig.tsx");

export const getGameMentionsAutocompleteConfig = function getGameMentionsAutocompleteConfig(location) {
  let obj = require(9640) /* apexExperiment */;
  obj = { location };
  const gameMentionsExperiment = obj.getGameMentionsExperiment(obj);
  obj = {};
  const merged = Object.assign(gameMentionsExperiment);
  let enabled = gameMentionsExperiment.enabled;
  if (enabled) {
    const IncludeGameMentionsInAutocomplete = require(3838) /* explicitContentFromProto */.IncludeGameMentionsInAutocomplete;
    enabled = IncludeGameMentionsInAutocomplete.getSetting();
  }
  obj["enabled"] = enabled;
  return obj;
};
