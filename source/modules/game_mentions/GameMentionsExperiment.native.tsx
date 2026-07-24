// Module ID: 5729
// Function ID: 49250
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getGameMentionsExperiment, useGameMentionsExperiment

// Module 5729 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-game-mentions-v2-mobile", kind: "user", defaultConfig: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, variations: { [0]: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, [1]: { enabled: true, showNewTag: true, combineMentionAutocomplete: false }, [2]: { enabled: true, showNewTag: false, combineMentionAutocomplete: false }, [3]: { enabled: true, showNewTag: false, combineMentionAutocomplete: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/game_mentions/GameMentionsExperiment.native.tsx");

export const GameMentionsExperiment = apexExperiment;
export const useGameMentionsExperiment = function useGameMentionsExperiment(location) {
  return apexExperiment.useConfig({ location: location.location });
};
export const getGameMentionsExperiment = function getGameMentionsExperiment(location) {
  return apexExperiment.getConfig({ location: location.location });
};
