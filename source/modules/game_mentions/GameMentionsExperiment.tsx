// Module ID: 5724
// Function ID: 49213
// Name: apexExperiment
// Dependencies: []
// Exports: useIsGameMentionsEnabled

// Module 5724 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { marginTop: true, width: false, maxWidth: false }, variations: { [0]: { marginTop: true, width: false, maxWidth: false }, [1]: {}, [2]: { marginTop: "y", width: "isArray", maxWidth: "Reflect" }, [3]: { marginTop: true, width: true, maxWidth: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_mentions/GameMentionsExperiment.tsx");

export const GameMentionsExperiment = apexExperiment;
export const useIsGameMentionsEnabled = function useIsGameMentionsEnabled(GameMentionsInAutocomplete) {
  return apexExperiment.useConfig({ location: GameMentionsInAutocomplete }).enabled;
};
