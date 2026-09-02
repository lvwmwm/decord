// Module ID: 16764
// Function ID: 16765
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 16764 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-mobile-action-sheet-killswitch", defaultConfig: { disabled: false }, variations: { 0: { disabled: false }, 1: { disabled: true } } });
const result = set.fileFinishedImporting("modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx");

export default apexExperiment;
