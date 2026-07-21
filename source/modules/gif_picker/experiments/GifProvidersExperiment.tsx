// Module ID: 9570
// Function ID: 74583
// Name: apexExperiment
// Dependencies: []

// Module 9570 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: {}, variations: { [0]: {}, [1]: {}, [2]: { "Bool(false)": "Array", "Bool(false)": "isArray", "Bool(false)": "construct" } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/gif_picker/experiments/GifProvidersExperiment.tsx");

export const GifProvidersExperiment = apexExperiment;
