// Module ID: 17429
// Function ID: 17430
// Name: MainViewTooltipActionSheetsDisabledExperiment
// Dependencies: [1434, 2]

// Module 17429 (MainViewTooltipActionSheetsDisabledExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-mobile-action-sheet-killswitch", defaultConfig: { disabled: false }, variations: { 0: { disabled: false }, 1: { disabled: true } } });
const result = size.fileFinishedImporting("modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx");

export default apexExperiment;
