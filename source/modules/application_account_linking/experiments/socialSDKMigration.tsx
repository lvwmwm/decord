// Module ID: 4411
// Function ID: 4412
// Name: apexExperiment
// Dependencies: [1472, 2]

// Module 4411 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-battlenet-social-sdk-migration", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/application_account_linking/experiments/socialSDKMigration.tsx");

export const battlenetSocialSDKMigrationExperiment = apexExperiment;
