// Module ID: 14038
// Function ID: 14039
// Name: ContentClassificationPresenceFilterExperiment
// Dependencies: [1434, 2]

// Module 14038 (ContentClassificationPresenceFilterExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-02-content-classification-presence-filter", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/presence/ContentClassificationPresenceFilterExperiment.tsx");

export const ContentClassificationPresenceFilterExperiment = apexExperiment;
