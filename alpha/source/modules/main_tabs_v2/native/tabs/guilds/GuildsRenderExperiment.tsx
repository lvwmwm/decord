// Module ID: 18016
// Function ID: 18017
// Name: GuildsRenderExperiment
// Dependencies: [1448, 2]

// Module 18016 (GuildsRenderExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-guilds-render-experiment", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildsRenderExperiment.tsx");

export const GuildsRenderExperiment = apexExperiment;
