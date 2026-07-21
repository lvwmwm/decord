// Module ID: 10685
// Function ID: 83270
// Name: apexExperiment
// Dependencies: []

// Module 10685 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { showMobileGoLiveUpsell: false }, variations: { [1]: { position: null, zIndex: 0.5 }, [2]: {} } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;
