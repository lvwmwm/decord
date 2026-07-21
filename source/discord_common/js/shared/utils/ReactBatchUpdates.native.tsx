// Module ID: 682
// Function ID: 8405
// Name: batchUpdates
// Dependencies: []
// Exports: batchUpdates

// Module 682 (batchUpdates)
const unstable_batchedUpdates = require(dependencyMap[0]).unstable_batchedUpdates;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");

export const batchUpdates = function batchUpdates(arg0) {
  unstable_batchedUpdates(arg0);
};
