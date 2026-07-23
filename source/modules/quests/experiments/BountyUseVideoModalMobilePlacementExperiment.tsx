// Module ID: 10844
// Function ID: 84137
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10844 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-bounty-use-video-modal-mobile-placement-experiment", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: false }, [2]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/BountyUseVideoModalMobilePlacementExperiment.tsx");

export default apexExperiment;
