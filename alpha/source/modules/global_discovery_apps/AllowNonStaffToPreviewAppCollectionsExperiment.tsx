// Module ID: 11821
// Function ID: 11822
// Name: AllowNonStaffToPreviewAppCollectionsExperiment
// Dependencies: [1452, 2]

// Module 11821 (AllowNonStaffToPreviewAppCollectionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2025-01-allow-nonstaff-to-preview-app-collections", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx");

export default apexExperiment;
