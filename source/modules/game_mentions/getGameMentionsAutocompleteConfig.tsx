// Module ID: 9658
// Function ID: 9659
// Name: getGameMentionsAutocompleteConfig
// Dependencies: [9659, 3862, 2]
// Exports: getGameMentionsAutocompleteConfig

// Module 9658 (getGameMentionsAutocompleteConfig)
const result = require("set").fileFinishedImporting("modules/game_mentions/getGameMentionsAutocompleteConfig.tsx");

export const getGameMentionsAutocompleteConfig = function getGameMentionsAutocompleteConfig(location) {
  let obj = require(9659) /* apexExperiment */;
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
