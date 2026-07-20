// Module ID: 7184
// Function ID: 57831
// Name: apexExperiment
// Dependencies: []

// Module 7184 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[0]);
let obj = { -1269606814: "usd", -1845285747: "usd", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[0]);
obj = { -1269606814: null, -1845285747: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = _module2.createApexExperiment(obj);
const _module3 = require(dependencyMap[0]);
const obj1 = { -1269606814: null, -1845285747: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment3 = _module3.createApexExperiment(obj1);
const _module4 = require(dependencyMap[1]);
const result = _module4.fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
