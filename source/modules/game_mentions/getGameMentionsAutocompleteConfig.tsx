// Module ID: 5728
// Function ID: 49238
// Name: getGameMentionsAutocompleteConfig
// Dependencies: [5729, 3803, 2]
// Exports: getGameMentionsAutocompleteConfig

// Module 5728 (getGameMentionsAutocompleteConfig)
const result = require("set").fileFinishedImporting("modules/game_mentions/getGameMentionsAutocompleteConfig.tsx");

export const getGameMentionsAutocompleteConfig = function getGameMentionsAutocompleteConfig(location) {
  const GameMentionsExperiment = require(5729) /* apexExperiment */.GameMentionsExperiment;
  let obj = { location };
  const config = GameMentionsExperiment.getConfig(obj);
  obj = {};
  const merged = Object.assign(config);
  let enabled = config.enabled;
  if (enabled) {
    const IncludeGameMentionsInAutocomplete = require(3803) /* explicitContentFromProto */.IncludeGameMentionsInAutocomplete;
    enabled = IncludeGameMentionsInAutocomplete.getSetting();
  }
  obj["enabled"] = enabled;
  return obj;
};
