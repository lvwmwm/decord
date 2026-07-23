// Module ID: 7194
// Function ID: 57899
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 7194 (apexExperiment)
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { name: "2026-03-nitro-acom-subscription", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
obj = { name: "2026-03-acom-modify-dark-launch", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj);
const obj1 = { name: "2026-06-otp-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj1);
const obj2 = { name: "2026-06-gift-acom-order", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment3 = ApexExperiment.createApexExperiment(obj2);
const obj3 = { name: "2026-07-nitro-acom-trials", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment4 = ApexExperiment.createApexExperiment(obj3);
const result = require("set").fileFinishedImporting("modules/billing/native/ACOMExperiments.tsx");

export const NitroACOMSubscriptionExperiment = apexExperiment;
export const ACOMModifyDarkLaunchExperiment = apexExperiment1;
export const OTPACOMOrderExperiment = apexExperiment2;
export const GiftACOMOrderExperiment = apexExperiment3;
export const NitroACOMTrialsExperiment = apexExperiment4;
