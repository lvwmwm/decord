// Module ID: 11429
// Function ID: 88939
// Name: useCommandDiscoveryManager
// Dependencies: []
// Exports: updateInitialSectionId

// Module 11429 (useCommandDiscoveryManager)
const _module = require(dependencyMap[0]);
const obj = _module.create(() => ({ initialSectionId: undefined }));
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/application_commands/ApplicationCommandDiscoveryManager.tsx");

export const useCommandDiscoveryManager = obj;
export const updateInitialSectionId = function updateInitialSectionId(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => state.setState(() => ({ initialSectionId: closure_0 })));
};
