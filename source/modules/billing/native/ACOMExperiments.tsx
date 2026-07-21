// Module ID: 7189
// Function ID: 57854
// Name: apexExperiment
// Dependencies: []

// Module 7189 (apexExperiment)
const _module = require(dependencyMap[0]);
let obj = { 844175713: false, 1387159956: false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { 844175713: "Array", 1387159956: "isArray", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[0]);
const obj1 = { 844175713: "AccountAgeTier6LargeBadge", 1387159956: "linkCode", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = _module2.createApexExperiment(obj1);
const _module3 = require(dependencyMap[0]);
const obj2 = { 844175713: "__workletHash", 1387159956: "to", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment3 = _module3.createApexExperiment(obj2);
const _module4 = require(dependencyMap[1]);
const result = _module4.fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
