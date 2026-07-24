// Module ID: 11266
// Function ID: 87697
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 11266 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-01-allow-nonstaff-to-preview-app-collections", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx");

export default apexExperiment;
