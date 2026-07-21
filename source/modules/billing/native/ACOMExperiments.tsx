// Module ID: 7188
// Function ID: 57842
// Name: apexExperiment
// Dependencies: []

// Module 7188 (apexExperiment)
const _module = require(dependencyMap[0]);
let obj = { 9223372036854775807: "r", 0: "GLOBAL_DISCOVERY", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { 9223372036854775807: "onGrantRequest", 0: "%Uint16Array%", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[0]);
const obj1 = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = _module2.createApexExperiment(obj1);
const _module3 = require(dependencyMap[0]);
const obj2 = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment3 = _module3.createApexExperiment(obj2);
const _module4 = require(dependencyMap[1]);
const result = _module4.fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
