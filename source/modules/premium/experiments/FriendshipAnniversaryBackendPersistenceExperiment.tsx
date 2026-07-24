// Module ID: 7110
// Function ID: 57177
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: isFriendshipAnniversaryBackendPersistenceEnabled

// Module 7110 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-06-friendship-anniversary-backend-persistence", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/experiments/FriendshipAnniversaryBackendPersistenceExperiment.tsx");

export const FriendshipAnniversaryBackendPersistenceExperiment = apexExperiment;
export const isFriendshipAnniversaryBackendPersistenceEnabled = function isFriendshipAnniversaryBackendPersistenceEnabled(dismissGiftIntent) {
  return apexExperiment.getConfig({ location: dismissGiftIntent }).enabled;
};
