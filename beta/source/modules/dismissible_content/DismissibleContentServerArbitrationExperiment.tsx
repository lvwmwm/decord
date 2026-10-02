// Module ID: 2045
// Function ID: 2046
// Name: DismissibleContentServerArbitrationExperiment
// Dependencies: [1441, 2]

// Module 2045 (DismissibleContentServerArbitrationExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-09-dismissible-content-server-arbitration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentServerArbitrationExperiment.tsx");

export const DismissibleContentServerArbitrationExperiment = apexExperiment;
