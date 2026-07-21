// Module ID: 8618
// Function ID: 68296
// Name: apexExperiment
// Dependencies: []

// Module 8618 (apexExperiment)
let obj = { "Bool(false)": null, "Bool(false)": null };
const _module = require(dependencyMap[0]);
obj = { margin: false, paddingHorizontal: false };
obj.defaultConfig = obj;
obj.variations = { [0]: obj, [1]: { "Bool(false)": null, "Bool(false)": null }, [2]: { "Bool(false)": true, "Bool(false)": true } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
const apexExperiment1 = _module1.createApexExperiment({ defaultConfig: obj, variations: { [0]: obj, [1]: { "Bool(false)": null, "Bool(false)": null }, [2]: { "Bool(false)": true, "Bool(false)": true } } });
const _module2 = require(dependencyMap[1]);
const result = _module2.fileFinishedImporting("modules/game_profile/SimilarGamesExperiments.tsx");

export const GameProfileSimilarGamesDesktopExperiment = apexExperiment;
export const GameProfileSimilarGamesMobileExperiment = apexExperiment1;
