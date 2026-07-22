// Module ID: 8619
// Function ID: 68319
// Name: apexExperiment
// Dependencies: []

// Module 8619 (apexExperiment)
let obj = { grow: true, variant: true };
const _module = require(dependencyMap[0]);
obj = { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001282895982263, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000553840901442 };
obj.defaultConfig = obj;
obj.variations = { [0]: obj, [1]: { grow: null, variant: null }, [2]: { grow: "<string:1040334421>", variant: "<string:1040334338>" } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
const apexExperiment1 = _module1.createApexExperiment({ defaultConfig: obj, variations: { [0]: obj, [1]: { grow: null, variant: null }, [2]: { grow: "<string:1040334421>", variant: "<string:1040334338>" } } });
const _module2 = require(dependencyMap[1]);
const result = _module2.fileFinishedImporting("modules/game_profile/SimilarGamesExperiments.tsx");

export const GameProfileSimilarGamesDesktopExperiment = apexExperiment;
export const GameProfileSimilarGamesMobileExperiment = apexExperiment1;
