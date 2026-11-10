// Module ID: 9670
// Function ID: 9671
// Name: MapleSyrupExperiments
// Dependencies: [1447, 2]
// Exports: useMapleSyrup1Enabled, useMapleSyrup2Treatment, useMapleSyrup3Enabled

// Module 9670 (MapleSyrupExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let obj6;
let ApexExperiment = ApexExperiment_mod;
let obj = { kind: "user", name: "2026-10-maple-syrup-1", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { kind: "user", name: "2026-10-maple-syrup-2", defaultConfig: { treatment: null }, variations: obj4 };
obj4 = { 1: null, 2: { treatment: "A" } };
obj4[2] = { treatment: "B" };
let closure_1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { kind: "user", name: "2026-10-maple-syrup-3", defaultConfig: { enabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { enabled: true };
let closure_2 = ApexExperiment.createApexExperiment(obj5);
const result = size.fileFinishedImporting("modules/premium/experiments/MapleSyrupExperiments.tsx");

export function useMapleSyrup1Enabled(SettingsOverviewScreen) {
  const obj = { location: SettingsOverviewScreen };
  return closure_0.useConfig(obj).enabled;
}
export function useMapleSyrup2Treatment(useTitle) {
  const obj = { location: useTitle };
  return closure_1.useConfig(obj).treatment;
}
export function useMapleSyrup3Enabled(SettingsOverviewScreen) {
  const obj = { location: SettingsOverviewScreen };
  return closure_2.useConfig(obj).enabled;
}
