// Module ID: 11197
// Function ID: 87222
// Name: useClickOnHomeActivityOpensAppDetails
// Dependencies: []
// Exports: useClickOnHomeActivityOpensAppDetails

// Module 11197 (useClickOnHomeActivityOpensAppDetails)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_launcher/hooks/useClickOnHomeActivityOpensAppDetails.tsx");

export const useClickOnHomeActivityOpensAppDetails = function useClickOnHomeActivityOpensAppDetails() {
  const DeveloperMode = require(dependencyMap[0]).DeveloperMode;
  return DeveloperMode.useSetting();
};
