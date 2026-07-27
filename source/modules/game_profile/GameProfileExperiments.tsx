// Module ID: 5967
// Function ID: 53088
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 5967 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-06-game-profile-share-link", defaultConfig: { enabled: false, showSmallEmbed: false }, variations: { [1]: { enabled: true, showSmallEmbed: true }, [2]: { enabled: true, showSmallEmbed: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/game_profile/GameProfileExperiments.tsx");

export const GameProfileShareLinkExperiment = apexExperiment;
