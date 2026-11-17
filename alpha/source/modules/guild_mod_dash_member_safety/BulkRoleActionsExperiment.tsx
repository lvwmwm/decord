// Module ID: 7293
// Function ID: 7294
// Name: BulkRoleActionsExperiment
// Dependencies: [1452, 2]

// Module 7293 (BulkRoleActionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-10-guild-bulk-role-actions", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkRoleActionsExperiment.tsx");

export default apexExperiment;
