// Module ID: 4514
// Function ID: 4515
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 4514 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-07-autoclipping-default-override", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/clips/AutoclippingDefaultOverrideExperiment.tsx");

export const AutoclippingDefaultOverrideExperiment = apexExperiment;
