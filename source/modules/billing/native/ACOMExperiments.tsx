// Module ID: 7189
// Function ID: 57865
// Name: apexExperiment
// Dependencies: []

// Module 7189 (apexExperiment)
const _module = require(dependencyMap[0]);
let obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { y: -2130705827, DateToSystemTimezoneSetter: 2063598034, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[0]);
const obj1 = { y: 1358955101, DateToSystemTimezoneSetter: 2068535336, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = _module2.createApexExperiment(obj1);
const _module3 = require(dependencyMap[0]);
const obj2 = { y: "r", DateToSystemTimezoneSetter: "RCTOverKeyboardView", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment3 = _module3.createApexExperiment(obj2);
const _module4 = require(dependencyMap[1]);
const result = _module4.fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
