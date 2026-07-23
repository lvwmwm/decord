// Module ID: 5729
// Function ID: 49240
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useIsGameMentionsEnabled

// Module 5729 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-game-mentions-v2", kind: "user", defaultConfig: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, variations: { [0]: { enabled: false, showNewTag: false, combineMentionAutocomplete: false }, [1]: { enabled: true, showNewTag: true, combineMentionAutocomplete: false }, [2]: { enabled: true, showNewTag: false, combineMentionAutocomplete: false }, [3]: { enabled: true, showNewTag: false, combineMentionAutocomplete: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/game_mentions/GameMentionsExperiment.tsx");

export const GameMentionsExperiment = apexExperiment;
export const useIsGameMentionsEnabled = function useIsGameMentionsEnabled(GameMentionsInAutocomplete) {
  return apexExperiment.useConfig({ location: GameMentionsInAutocomplete }).enabled;
};
