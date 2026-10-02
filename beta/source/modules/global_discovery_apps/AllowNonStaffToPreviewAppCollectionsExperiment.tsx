// Module ID: 11485
// Function ID: 11486
// Name: AllowNonStaffToPreviewAppCollectionsExperiment
// Dependencies: [1441, 2]

// Module 11485 (AllowNonStaffToPreviewAppCollectionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2025-01-allow-nonstaff-to-preview-app-collections", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/global_discovery_apps/AllowNonStaffToPreviewAppCollectionsExperiment.tsx");

export default apexExperiment;
