// Module ID: 10686
// Function ID: 83294
// Name: apexExperiment
// Dependencies: []

// Module 10686 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { showMobileGoLiveUpsell: false }, variations: { [1]: { "Bool(true)": null, "Bool(true)": 0.5 }, [2]: {} } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;
