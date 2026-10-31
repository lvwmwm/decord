// Module ID: 18059
// Function ID: 18060
// Name: GuildsRenderExperiment
// Dependencies: [1447, 2]

// Module 18059 (GuildsRenderExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-guilds-render-experiment", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildsRenderExperiment.tsx");

export const GuildsRenderExperiment = apexExperiment;
