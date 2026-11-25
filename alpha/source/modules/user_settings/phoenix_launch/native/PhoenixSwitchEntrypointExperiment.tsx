// Module ID: 17327
// Function ID: 17328
// Name: PhoenixSwitchEntrypointExperiment
// Dependencies: [1450, 2]

// Module 17327 (PhoenixSwitchEntrypointExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-11-phoenix-switch-entrypoint", kind: "user", defaultConfig: { enabled: false, requiresNitro: true }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, requiresNitro: false } };
obj2[2] = { enabled: true, requiresNitro: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixSwitchEntrypointExperiment.tsx");

export default apexExperiment;
