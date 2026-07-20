// Module ID: 7101
// Function ID: 57096
// Name: apexExperiment
// Dependencies: []
// Exports: isFriendshipAnniversaryBackendPersistenceEnabled

// Module 7101 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/FriendshipAnniversaryBackendPersistenceExperiment.tsx");

export const FriendshipAnniversaryBackendPersistenceExperiment = apexExperiment;
export const isFriendshipAnniversaryBackendPersistenceEnabled = function isFriendshipAnniversaryBackendPersistenceEnabled(dismissGiftIntent) {
  return apexExperiment.getConfig({ location: dismissGiftIntent }).enabled;
};
