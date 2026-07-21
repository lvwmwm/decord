// Module ID: 15508
// Function ID: 118350
// Name: apexExperiment
// Dependencies: []

// Module 15508 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { bottom: "<string:2803040258>", name: "<string:2018574338>", defaultConfig: { disabled: false }, variations: { [0]: { disabled: false }, [1]: { disabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/upsell_tooltip/experiments/MainViewTooltipActionSheetsDisabledExperiment.tsx");

export default apexExperiment;
