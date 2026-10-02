// Module ID: 16780
// Function ID: 16781
// Name: MainViewTooltipActionSheetsDisabledExperiment
// Dependencies: [1441, 2]

// Module 16780 (MainViewTooltipActionSheetsDisabledExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-01-mobile-action-sheet-killswitch", defaultConfig: { disabled: false }, variations: { 0: { disabled: false }, 1: { disabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx");

export default apexExperiment;
