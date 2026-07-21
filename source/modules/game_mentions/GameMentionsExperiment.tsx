// Module ID: 5724
// Function ID: 49195
// Name: apexExperiment
// Dependencies: []

// Module 5724 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: -157218384989248040000000000, 0: -157218384989248500000000000, defaultConfig: { Boolean: true, keys: false, source: false }, variations: { [0]: { Boolean: true, keys: false, source: false }, [1]: { Boolean: true, keys: true, source: true }, [2]: { Boolean: true, keys: true, source: true }, [3]: { Boolean: "o", keys: "code", source: "o" } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/game_mentions/GameMentionsExperiment.tsx");

export const GameMentionsExperiment = apexExperiment;
