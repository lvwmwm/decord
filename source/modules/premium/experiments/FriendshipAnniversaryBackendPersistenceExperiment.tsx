// Module ID: 7247
// Function ID: 7248
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: isFriendshipAnniversaryBackendPersistenceEnabled

// Module 7247 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-06-friendship-anniversary-backend-persistence", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/premium/experiments/FriendshipAnniversaryBackendPersistenceExperiment.tsx");

export const FriendshipAnniversaryBackendPersistenceExperiment = apexExperiment;
export const isFriendshipAnniversaryBackendPersistenceEnabled = function isFriendshipAnniversaryBackendPersistenceEnabled(dismissGiftIntent) {
  return apexExperiment.getConfig({ location: dismissGiftIntent }).enabled;
};
