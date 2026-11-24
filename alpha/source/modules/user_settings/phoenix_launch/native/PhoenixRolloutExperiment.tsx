// Module ID: 17218
// Function ID: 17219
// Name: PhoenixRolloutExperiment
// Dependencies: [1450, 17217, 2]

// Module 17218 (PhoenixRolloutExperiment)
import LaunchClient from "LaunchClient" /* 17217 */;
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-11-phoenix-rollout", kind: "user", defaultConfig: { forcedClient: null }, variations: obj2 };
obj2 = { 0: { forcedClient: null }, 1: { forcedClient: LaunchClient.LaunchClient.PHOENIX }, 2: null };
const createApexExperiment = ApexExperiment.createApexExperiment;
({ forcedClient: LaunchClient.LaunchClient.PHOENIX });
obj2[2] = { forcedClient: LaunchClient.LaunchClient.LEGACY };
({ forcedClient: LaunchClient.LaunchClient.LEGACY });
const apexExperiment = createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixRolloutExperiment.tsx");

export default apexExperiment;
