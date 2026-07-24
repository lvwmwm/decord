// Module ID: 14065
// Function ID: 107579
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 14065 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-07-ad-recheck-interval-experiment", kind: "user", defaultConfig: { enableFastAdRecheck: false }, variations: { [1]: { enableFastAdRecheck: false }, [2]: { enableFastAdRecheck: true }, [3]: { enableFastAdRecheck: true }, [4]: { enableFastAdRecheck: true }, [5]: { enableFastAdRecheck: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/AdRecheckIntervalExperiment.tsx");

export default apexExperiment;
