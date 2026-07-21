// Module ID: 9570
// Function ID: 74572
// Name: apexExperiment
// Dependencies: []

// Module 9570 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "text-md/bold", 0: "text-brand", defaultConfig: {}, variations: { [0]: {}, [1]: { aria-label: true, size: true, channel: true }, [2]: { aria-label: false, size: false, channel: false } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/gif_picker/experiments/GifProvidersExperiment.tsx");

export const GifProvidersExperiment = apexExperiment;
