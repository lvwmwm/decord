// Module ID: 5723
// Function ID: 49211
// Name: getGameMentionsAutocompleteConfig
// Dependencies: []
// Exports: getGameMentionsAutocompleteConfig

// Module 5723 (getGameMentionsAutocompleteConfig)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/game_mentions/getGameMentionsAutocompleteConfig.tsx");

export const getGameMentionsAutocompleteConfig = function getGameMentionsAutocompleteConfig(location) {
  const GameMentionsExperiment = require(dependencyMap[0]).GameMentionsExperiment;
  let obj = { location };
  const config = GameMentionsExperiment.getConfig(obj);
  obj = {};
  const merged = Object.assign(config);
  let enabled = config.enabled;
  if (enabled) {
    const IncludeGameMentionsInAutocomplete = require(dependencyMap[1]).IncludeGameMentionsInAutocomplete;
    enabled = IncludeGameMentionsInAutocomplete.getSetting();
  }
  obj["enabled"] = enabled;
  return obj;
};
