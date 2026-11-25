// Module ID: 20089
// Function ID: 20090
// Name: ClipsDefaultOnGeoExperiment
// Dependencies: [1450, 2]

// Module 20089 (ClipsDefaultOnGeoExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-clips-default-on-geo", defaultConfig: { allowDefaultOn: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { allowDefaultOn: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/ClipsDefaultOnGeoExperiment.tsx");

export default apexExperiment;
