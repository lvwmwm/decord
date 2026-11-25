// Module ID: 19251
// Function ID: 19252
// Name: bloonsTDBattlesUpsellExperiment
// Dependencies: [1450, 19252, 2]

// Module 19251 (bloonsTDBattlesUpsellExperiment)
import accountLinkUpsellExperimentConfig from "accountLinkUpsellExperimentConfig" /* 19252 */;
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { 0: { enabled: true, orbQuantity: 100 }, 1: { enabled: true, orbQuantity: 200 } };
const obj2 = { name: "2026-11-bloons-td-battles-account-linking-upsell", kind: "user", defaultConfig: accountLinkUpsellExperimentConfig.ACCOUNT_LINK_UPSELL_EXPERIMENT_DEFAULT_CONFIG, variations: obj };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/application_account_linking/experiments/bloonsTDBattlesUpsellExperiment.tsx");

export const BLOONS_TD_BATTLES_UPSELL_EXPERIMENT_VARIATIONS = obj;
export const bloonsTDBattlesUpsellExperiment = apexExperiment;
