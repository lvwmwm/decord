// Module ID: 8618
// Function ID: 68307
// Name: apexExperiment
// Dependencies: []

// Module 8618 (apexExperiment)
let obj = { overflow: null, padding: null };
const _module = require(dependencyMap[0]);
obj = { bottom: false, name: false };
obj.defaultConfig = obj;
obj.variations = { [0]: obj, [1]: { overflow: null, padding: null }, [2]: { overflow: null, padding: null } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { bottom: null, name: 1 };
obj.defaultConfig = obj;
obj.variations = { [0]: obj, [1]: { overflow: null, padding: null }, [2]: { overflow: null, padding: null } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[1]);
const result = _module2.fileFinishedImporting("modules/game_profile/SimilarGamesExperiments.tsx");

export const GameProfileSimilarGamesDesktopExperiment = apexExperiment;
export const GameProfileSimilarGamesMobileExperiment = apexExperiment1;
