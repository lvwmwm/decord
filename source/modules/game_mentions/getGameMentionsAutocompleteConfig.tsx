// Module ID: 9661
// Function ID: 9662
// Name: getGameMentionsAutocompleteConfig
// Dependencies: [9662, 3862, 2]
// Exports: getGameMentionsAutocompleteConfig

// Module 9661 (getGameMentionsAutocompleteConfig)
const result = require("set").fileFinishedImporting("modules/game_mentions/getGameMentionsAutocompleteConfig.tsx");

export const getGameMentionsAutocompleteConfig = function getGameMentionsAutocompleteConfig(location) {
  let obj = require(9662) /* apexExperiment */;
  obj = { location };
  const gameMentionsExperiment = obj.getGameMentionsExperiment(obj);
  obj = {};
  const merged = Object.assign(gameMentionsExperiment);
  let enabled = gameMentionsExperiment.enabled;
  if (enabled) {
    const IncludeGameMentionsInAutocomplete = require(3862) /* explicitContentFromProto */.IncludeGameMentionsInAutocomplete;
    enabled = IncludeGameMentionsInAutocomplete.getSetting();
  }
  obj.enabled = enabled;
  return obj;
};
