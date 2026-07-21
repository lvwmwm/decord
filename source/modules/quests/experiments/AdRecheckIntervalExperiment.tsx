// Module ID: 13894
// Function ID: 105060
// Name: apexExperiment
// Dependencies: []

// Module 13894 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { enableFastAdRecheck: false }, variations: { [1]: { enableFastAdRecheck: false }, [2]: { enableFastAdRecheck: true }, [3]: { enableFastAdRecheck: true }, [4]: { enableFastAdRecheck: true }, [5]: { enableFastAdRecheck: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/quests/experiments/AdRecheckIntervalExperiment.tsx");

export default apexExperiment;
