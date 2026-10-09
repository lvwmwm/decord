// Module ID: 17599
// Function ID: 17600
// Name: MainViewTooltipActionSheetsDisabledExperiment
// Dependencies: [1453, 2]

// Module 17599 (MainViewTooltipActionSheetsDisabledExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-01-mobile-action-sheet-killswitch", defaultConfig: { disabled: false }, variations: { 0: { disabled: false }, 1: { disabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx");

export default apexExperiment;
