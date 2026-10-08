// Module ID: 2026
// Function ID: 2027
// Name: socialSDKMigration
// Dependencies: [1452, 2]

// Module 2026 (socialSDKMigration)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-battlenet-social-sdk-migration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/application_account_linking/experiments/socialSDKMigration.tsx");

export const battlenetSocialSDKMigrationExperiment = apexExperiment;
