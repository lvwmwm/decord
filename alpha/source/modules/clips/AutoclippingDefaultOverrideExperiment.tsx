// Module ID: 14285
// Function ID: 14286
// Name: AutoclippingDefaultOverrideExperiment
// Dependencies: [1453, 2]

// Module 14285 (AutoclippingDefaultOverrideExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-07-autoclipping-default-override", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/clips/AutoclippingDefaultOverrideExperiment.tsx");

export const AutoclippingDefaultOverrideExperiment = apexExperiment;
