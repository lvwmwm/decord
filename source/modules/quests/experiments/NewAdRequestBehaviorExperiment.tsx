// Module ID: 6957
// Function ID: 55575
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 6957 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-10-ad-request-behavior-experiment", kind: "user", defaultConfig: { enableNewRequestBehavior: false }, variations: { [1]: { enableNewRequestBehavior: false }, [2]: { enableNewRequestBehavior: true }, [3]: { enableNewRequestBehavior: false }, [4]: { enableNewRequestBehavior: true }, [5]: { enableNewRequestBehavior: true }, [6]: { enableNewRequestBehavior: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/quests/experiments/NewAdRequestBehaviorExperiment.tsx");

export default apexExperiment;
