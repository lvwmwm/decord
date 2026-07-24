// Module ID: 8668
// Function ID: 68581
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 8668 (apexExperiment)
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { enabled: false, dense: false };
obj = { kind: "user", name: "2026-06-similar-games-desktop" };
obj.defaultConfig = obj;
obj.variations = { [0]: obj, [1]: { enabled: true, dense: true }, [2]: { enabled: true, dense: false } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
obj = { kind: "user", name: "2026-06-similar-games-mobile" };
obj.defaultConfig = obj;
obj.variations = { [0]: obj, [1]: { enabled: true, dense: true }, [2]: { enabled: true, dense: false } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/game_profile/SimilarGamesExperiments.tsx");

export const GameProfileSimilarGamesDesktopExperiment = apexExperiment;
export const GameProfileSimilarGamesMobileExperiment = apexExperiment1;
