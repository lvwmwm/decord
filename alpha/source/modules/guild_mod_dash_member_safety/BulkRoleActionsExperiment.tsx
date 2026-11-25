// Module ID: 7592
// Function ID: 7593
// Name: BulkRoleActionsExperiment
// Dependencies: [1450, 2]

// Module 7592 (BulkRoleActionsExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { kind: "guild", name: "2026-10-guild-bulk-role-actions", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkRoleActionsExperiment.tsx");

export default apexExperiment;
