// Module ID: 5728
// Function ID: 49248
// Name: getGameMentionsAutocompleteConfig
// Dependencies: [5729, 3803, 2]
// Exports: getGameMentionsAutocompleteConfig

// Module 5728 (getGameMentionsAutocompleteConfig)
const result = require("set").fileFinishedImporting("modules/game_mentions/getGameMentionsAutocompleteConfig.tsx");

export const getGameMentionsAutocompleteConfig = function getGameMentionsAutocompleteConfig(location) {
  let obj = require(5729) /* apexExperiment */;
  obj = { location };
  const gameMentionsExperiment = obj.getGameMentionsExperiment(obj);
  obj = {};
  const merged = Object.assign(gameMentionsExperiment);
  let enabled = gameMentionsExperiment.enabled;
  if (enabled) {
    const IncludeGameMentionsInAutocomplete = require(3803) /* explicitContentFromProto */.IncludeGameMentionsInAutocomplete;
    enabled = IncludeGameMentionsInAutocomplete.getSetting();
  }
  obj["enabled"] = enabled;
  return obj;
};
